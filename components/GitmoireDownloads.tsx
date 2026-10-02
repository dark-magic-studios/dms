"use client";

import { useEffect, useState } from "react";
import { Download, Terminal, Check, Copy, ExternalLink, Laptop, ShieldCheck } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

const RELEASES_BASE =
  "https://github.com/dark-magic-studios/gitmoire/releases/download/v0.7.0/";
const RELEASES_ALL = "https://github.com/dark-magic-studios/gitmoire/releases";

const MACOS_DMG = `${RELEASES_BASE}gitmoire_0.7.0_universal.dmg`;
const WINDOWS_EXE = `${RELEASES_BASE}gitmoire_0.7.0_x64-setup.exe`;
const LINUX_APPIMAGE = `${RELEASES_BASE}gitmoire_0.7.0_amd64.AppImage`;

const HOMEBREW_CMD = "brew install --cask dark-magic-studios/tap/gitmoire";
const LINUX_CMD = "chmod +x gitmoire_0.7.0_amd64.AppImage && ./gitmoire_0.7.0_amd64.AppImage";

export default function GitmoireDownloads() {
  const [detectedOs, setDetectedOs] = useState<"mac" | "win" | "linux" | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ua = navigator.userAgent || "";
    const platform = (navigator as unknown as { userAgentData?: { platform?: string } })
      .userAgentData?.platform || navigator.platform || "";

    if (/Mac/i.test(platform) || /Macintosh|Mac OS X/i.test(ua)) {
      setDetectedOs("mac");
    } else if (/Win/i.test(platform) || /Windows/i.test(ua)) {
      setDetectedOs("win");
    } else if (/Linux/i.test(platform) || /Linux/i.test(ua)) {
      setDetectedOs("linux");
    }
  }, []);

  const handleCopy = (cmd: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(cmd);
      setCopiedCmd(cmd);
      setTimeout(() => setCopiedCmd(null), 2000);
    }
  };

  return (
    <section id="download" className="gitmoire-download-section">
      <div className="dm-container">
        <div className="gitmoire-section-meta text-center">
          <div className="gitmoire-eyebrow">Download &amp; Install</div>
          <h2 className="gitmoire-section-title">Pick your operating system</h2>
          <p className="gitmoire-section-lede">
            Free, MIT licensed, and approximately 14 MB. Self-updating once installed.
            No sign-up form, no cloud verification, no license keys.
          </p>
        </div>

        <div className="gitmoire-dl-grid">
          {/* macOS */}
          <div className={`gitmoire-dl-card ${detectedOs === "mac" ? "is-recommended" : ""}`}>
            {detectedOs === "mac" && (
              <div className="gitmoire-dl-card__ribbon">Your System</div>
            )}
            <div className="gitmoire-dl-card__header">
              <div className="gitmoire-dl-card__icon">
                <Laptop className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="gitmoire-dl-card__title">macOS</h3>
                <p className="gitmoire-dl-card__subtitle">
                  Universal Binary · Apple Silicon &amp; Intel · .dmg
                </p>
              </div>
            </div>

            <p className="gitmoire-dl-card__desc">
              Native build compiled for both M-series chips and Intel Macs. Runs with native
              smoothness on Sonoma, Sequoia, and earlier versions.
            </p>

            <TrackedLink
              className="gitmoire-btn gitmoire-btn--primary gitmoire-btn--full"
              href={MACOS_DMG}
              external
              eventName="download_click"
              eventCategory="gitmoire_download"
              eventLabel="macos_dmg"
            >
              <Download className="w-4 h-4 mr-2" aria-hidden="true" />
              Download .dmg (14 MB)
            </TrackedLink>

            <div className="gitmoire-cmd-box">
              <div className="gitmoire-cmd-box__header">
                <span className="gitmoire-cmd-box__label">Homebrew</span>
                <button
                  type="button"
                  className="gitmoire-cmd-box__btn"
                  onClick={() => handleCopy(HOMEBREW_CMD)}
                  aria-label="Copy Homebrew command"
                >
                  {copiedCmd === HOMEBREW_CMD ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <code className="gitmoire-cmd-box__code">{HOMEBREW_CMD}</code>
            </div>
          </div>

          {/* Windows */}
          <div className={`gitmoire-dl-card ${detectedOs === "win" ? "is-recommended" : ""}`}>
            {detectedOs === "win" && (
              <div className="gitmoire-dl-card__ribbon">Your System</div>
            )}
            <div className="gitmoire-dl-card__header">
              <div className="gitmoire-dl-card__icon">
                <Laptop className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="gitmoire-dl-card__title">Windows</h3>
                <p className="gitmoire-dl-card__subtitle">64-bit installer · Windows 10/11 · .exe</p>
              </div>
            </div>

            <p className="gitmoire-dl-card__desc">
              Standard Windows installer powered by WebView2. Compact footprint, fast startup,
              and native Windows credential store integration.
            </p>

            <TrackedLink
              className="gitmoire-btn gitmoire-btn--primary gitmoire-btn--full"
              href={WINDOWS_EXE}
              external
              eventName="download_click"
              eventCategory="gitmoire_download"
              eventLabel="windows_exe"
            >
              <Download className="w-4 h-4 mr-2" aria-hidden="true" />
              Download .exe (Installer)
            </TrackedLink>

            <div className="gitmoire-dl-card__note">
              <ShieldCheck className="w-4 h-4 text-smoke-3 shrink-0" aria-hidden="true" />
              <span>
                As an indie release, Windows SmartScreen may show &ldquo;More info → Run anyway&rdquo;
                on first launch.
              </span>
            </div>
          </div>

          {/* Linux */}
          <div className={`gitmoire-dl-card ${detectedOs === "linux" ? "is-recommended" : ""}`}>
            {detectedOs === "linux" && (
              <div className="gitmoire-dl-card__ribbon">Your System</div>
            )}
            <div className="gitmoire-dl-card__header">
              <div className="gitmoire-dl-card__icon">
                <Terminal className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="gitmoire-dl-card__title">Linux</h3>
                <p className="gitmoire-dl-card__subtitle">Standalone AppImage · x86_64</p>
              </div>
            </div>

            <p className="gitmoire-dl-card__desc">
              Portable standalone AppImage compatible with Ubuntu, Debian, Fedora, Arch, and
              major distributions with WebKitGTK.
            </p>

            <TrackedLink
              className="gitmoire-btn gitmoire-btn--primary gitmoire-btn--full"
              href={LINUX_APPIMAGE}
              external
              eventName="download_click"
              eventCategory="gitmoire_download"
              eventLabel="linux_appimage"
            >
              <Download className="w-4 h-4 mr-2" aria-hidden="true" />
              Download AppImage
            </TrackedLink>

            <div className="gitmoire-cmd-box">
              <div className="gitmoire-cmd-box__header">
                <span className="gitmoire-cmd-box__label">Run directly</span>
                <button
                  type="button"
                  className="gitmoire-cmd-box__btn"
                  onClick={() => handleCopy(LINUX_CMD)}
                  aria-label="Copy Linux command"
                >
                  {copiedCmd === LINUX_CMD ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <code className="gitmoire-cmd-box__code">{LINUX_CMD}</code>
            </div>
          </div>
        </div>

        {/* Releases link note */}
        <div className="gitmoire-dl-footer text-center">
          <p className="gitmoire-dl-footer__text">
            Looking for older versions, Debian packages (<code>.deb</code>), or SHA-256 release checksums?
          </p>
          <TrackedLink
            className="gitmoire-btn gitmoire-btn--ghost gitmoire-btn--sm inline-flex items-center"
            href={RELEASES_ALL}
            external
            eventName="link_click"
            eventCategory="gitmoire_release"
            eventLabel="github_all_releases"
          >
            <span>Browse All Releases on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
