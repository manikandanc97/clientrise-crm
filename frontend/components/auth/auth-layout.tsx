import React from "react";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  footerLinkText,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Brand Section */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-white text-xl font-bold shadow-lg">
            CR
          </div>

          <h1 className="text-3xl font-bold text-slate-900">ClientRise</h1>

          <p className="text-sm text-slate-500 mt-2">
            Premium CRM for modern business growth
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border bg-white shadow-sm p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>

            <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
          </div>

          {children}

          <p className="text-center text-sm text-slate-500 mt-6">
            {footerText}{" "}
            <a
              href={footerLink}
              className="text-emerald-700 font-medium hover:underline"
            >
              {footerLinkText}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
