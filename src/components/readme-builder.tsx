"use client";

import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { THEMES, DEFAULT_THEME } from "@/lib/themes";

const FIELD_DEFS = [
  { key: "distro", label: "Distro", color: "#8bd5ca", placeholder: "Windows 11" },
  { key: "host", label: "Host", color: "#eed49f", placeholder: "Solenad" },
  { key: "uptime", label: "Uptime", color: "#a6da95", placeholder: "21 years" },
  { key: "kernel", label: "Kernel", color: "#f5bde6", placeholder: "Software Developer Intern..." },
  { key: "school", label: "School", color: "#8aadf4", placeholder: "BS Computer Science..." },
  { key: "shell", label: "Shell", color: "#c6a0f6", placeholder: "PowerShell + WezTerm" },
  { key: "wm", label: "WM", color: "#f5a97f", placeholder: "GlazeWM + Zebar" },
  { key: "editor", label: "Editor", color: "#a6da95", placeholder: "Neovim" },
  { key: "languages", label: "Languages", color: "#91d7e3", placeholder: "C, Java, JavaScript..." },
  { key: "stack", label: "Stack", color: "#eed49f", placeholder: "React, Next.js..." },
  { key: "db", label: "DB", color: "#ee99a0", placeholder: "PostgreSQL, MySQL..." },
  { key: "tools", label: "Tools", color: "#b7bdf8", placeholder: "Git, Docker..." },
  { key: "ai", label: "AI", color: "#b7bdf8", placeholder: "Opencode, Openspec" },
];

const DEFAULT_VALUES: Record<string, string> = Object.fromEntries(
  FIELD_DEFS.map((f) => [f.key, ""]),
);

function yearsSince(dateStr: string): string {
  const created = new Date(dateStr);
  const now = new Date();
  let years = now.getFullYear() - created.getFullYear();
  const m = now.getMonth() - created.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < created.getDate())) years--;
  return `${Math.max(1, years)} years on GitHub`;
}

async function fetchProfile(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: { "User-Agent": "fastfetch-readme-builder" },
  });
  if (!res.ok) {
    if (res.status === 404) throw new Error("User not found on GitHub");
    if (res.status === 403) throw new Error("Rate limited by GitHub. Try again later.");
    throw new Error(`GitHub API error (${res.status})`);
  }
  return res.json();
}

function mapProfileToFields(profile: Record<string, unknown>): Record<string, string> {
  const fields: Record<string, string> = {};
  if (typeof profile.name === "string" && profile.name) fields.host = profile.name;
  if (typeof profile.bio === "string" && profile.bio) fields.kernel = profile.bio;
  if (typeof profile.company === "string" && profile.company) fields.school = profile.company;
  if (typeof profile.location === "string" && profile.location) fields.distro = profile.location;
  if (typeof profile.created_at === "string" && profile.created_at) {
    fields.uptime = yearsSince(profile.created_at);
  }
  return fields;
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export function ReadmeBuilder() {
  const [origin, setOrigin] = useState("");
  const [username, setUsername] = useState("");
  const [fetchTarget, setFetchTarget] = useState<string | null>(null);
  const [fields, setFields] = useState<Record<string, string>>({ ...DEFAULT_VALUES });
  const [showAscii, setShowAscii] = useState(true);
  const [showCrt, setShowCrt] = useState(true);
  const [customAscii, setCustomAscii] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(DEFAULT_THEME);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const profileQuery = useQuery({
    queryKey: ["github-profile", fetchTarget],
    queryFn: () => fetchProfile(fetchTarget!),
    enabled: !!fetchTarget,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    meta: { errorMessage: "Failed to fetch profile" },
  });

  useEffect(() => {
    if (profileQuery.data) {
      const mapped = mapProfileToFields(profileQuery.data);
      setFields((prev) => ({ ...prev, ...mapped }));
      toast.success(`Fetched profile for ${fetchTarget}`, { duration: 2000 });
    }
  }, [profileQuery.data, fetchTarget]);

  useEffect(() => {
    if (profileQuery.error) {
      toast.error(profileQuery.error.message, { duration: 4000 });
    }
  }, [profileQuery.error]);

  const debouncedFields = useDebounce(fields, 500);
  const debouncedUsername = useDebounce(username, 500);
  const debouncedAscii = useDebounce(customAscii, 500);
  const debouncedTheme = useDebounce(selectedTheme, 200);

  const previewUrl = buildPreviewUrl(origin, debouncedUsername, debouncedFields, showAscii, debouncedAscii, showCrt, debouncedTheme);

  const updateField = useCallback((key: string, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleFetch = useCallback(() => {
    const trimmed = username.trim();
    if (!trimmed) {
      toast.error("Enter a GitHub username first");
      return;
    }
    setFetchTarget(trimmed);
  }, [username]);

  const copy = useCallback((text: string, key: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 1500);
      },
      () => toast.error("Failed to copy"),
    );
  }, []);

  const fullUrl = buildPreviewUrl(origin, username, fields, showAscii, customAscii, showCrt, selectedTheme);
  const markdown = `![${username}](${fullUrl})`;
  const html = `<p align="center">\n  <img src="${fullUrl}" alt="${username}" />\n</p>`;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleFetch();
    },
    [handleFetch],
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div>
          <div className="mb-4 flex items-end gap-3">
            <div className="flex-1">
              <Label htmlFor="gh-username" className="mb-1.5 block text-xs text-muted-foreground">
                GitHub Username
              </Label>
              <Input
                id="gh-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Solenad"
                className="font-mono placeholder:text-muted-foreground/30"
              />
            </div>
            <Button
              onClick={handleFetch}
              disabled={profileQuery.isFetching}
              variant="default"
              className="shrink-0"
            >
              {profileQuery.isFetching ? (
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Fetching...
                </span>
              ) : (
                "Fetch Profile"
              )}
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="ascii-toggle" checked={showAscii} onCheckedChange={setShowAscii} />
            <Label htmlFor="ascii-toggle" className="text-xs text-muted-foreground">
              Show ASCII art
            </Label>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Switch id="crt-toggle" checked={showCrt} onCheckedChange={setShowCrt} />
            <Label htmlFor="crt-toggle" className="text-xs text-muted-foreground">
              CRT effect
            </Label>
          </div>
          <div className="mt-3">
            <Label className="mb-1.5 block text-xs text-muted-foreground">Theme</Label>
            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
              <SelectTrigger className="font-mono text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(["light", "warm-dark", "deep-dark", "cool-dark"] as const).map((cat) => {
                  const catLabel = cat === "warm-dark" ? "Warm Dark" : cat === "deep-dark" ? "Deep Dark" : cat === "cool-dark" ? "Cool Dark" : "Light";
                  const grouped = THEMES.filter((t) => t.category === cat);
                  return (
                    <SelectGroup key={cat}>
                      <SelectLabel>{catLabel}</SelectLabel>
                      {grouped.map((t) => (
                        <SelectItem key={t.name} value={t.name} className="font-mono text-xs">
                          <span className="inline-flex items-center gap-2">
                            <span className="inline-flex overflow-hidden rounded">
                              {t.palette.slice(0, 5).map((c, i) => (
                                <span key={i} className="inline-block h-4 w-3" style={{ backgroundColor: c }} />
                              ))}
                            </span>
                            {t.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {showAscii && (
            <div className="mt-3">
              <Label htmlFor="ascii-art" className="mb-1 block text-xs text-muted-foreground">
                Custom ASCII art (optional &mdash; paste your own and add whitespace above the art as needed)
              </Label>
              <Textarea
                id="ascii-art"
                value={customAscii}
                onChange={(e) => setCustomAscii(e.target.value)}
                placeholder="Paste your ASCII art here..."
                className="max-h-48 min-h-[80px] font-mono text-xs leading-tight placeholder:text-muted-foreground/30"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
          {FIELD_DEFS.map((field) => (
            <div key={field.key}>
              <Label
                htmlFor={`field-${field.key}`}
                className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <span
                  className="inline-block h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: field.color }}
                />
                {field.label}
              </Label>
              <Input
                id={`field-${field.key}`}
                value={fields[field.key] ?? ""}
                onChange={(e) => updateField(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="font-mono text-xs placeholder:text-muted-foreground/30"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="overflow-hidden rounded-lg border border-border bg-card/40 p-2">
          <img
            src={previewUrl}
            alt="README card preview"
            className="block w-full"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0.5";
            }}
            onLoad={(e) => {
              (e.target as HTMLImageElement).style.opacity = "1";
            }}
          />
        </div>

        <div className="space-y-3">
          <Snippet
            label="Markdown"
            value={markdown}
            copied={copiedKey === "md"}
            onCopy={() => copy(markdown, "md")}
          />
          <Snippet
            label="HTML (centered, for GitHub profile README)"
            value={html}
            copied={copiedKey === "html"}
            onCopy={() => copy(html, "html")}
          />
          <Snippet
            label="Direct image URL"
            value={fullUrl}
            copied={copiedKey === "url"}
            onCopy={() => copy(fullUrl, "url")}
          />
        </div>
      </div>
    </div>
  );
}

function Snippet({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <button
          type="button"
          onClick={onCopy}
          className="cursor-pointer rounded border border-border bg-card px-2 py-1 font-bold text-term-green hover:border-term-green/60 hover:bg-card/80"
        >
          {copied ? "copied ✓" : "copy"}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-md border border-border bg-card/60 p-3 text-xs text-foreground/90">
        <code>{value}</code>
      </pre>
    </div>
  );
}

function buildPreviewUrl(
  origin: string,
  username: string,
  fields: Record<string, string>,
  showAscii: boolean,
  customAscii?: string,
  showCrt?: boolean,
  theme?: string,
): string {
  const params = new URLSearchParams();
  params.set("username", username || "Solenad");
  params.set("ascii", showAscii ? "1" : "0");
  params.set("crt", showCrt !== false ? "1" : "0");
  if (theme && theme !== DEFAULT_THEME) params.set("theme", theme);
  for (const [key, value] of Object.entries(fields)) {
    if (value) params.set(key, value);
  }
  if (customAscii) params.set("ascii_art", customAscii);
  const base = origin || "http://localhost:3000";
  return `${base}/api/public/readme.svg?${params.toString()}`;
}
