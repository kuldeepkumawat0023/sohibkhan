"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/types/portfolio.types";
import { ArrowRight, X, CheckCircle2, Bug, ShieldCheck, Wrench } from "lucide-react";

interface TestReportDialogProps {
  project: ProjectItem;
}

export function TestReportDialog({ project }: TestReportDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!project.detailedReport) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="font-mono text-xs text-primary hover:text-mint-glow inline-flex items-center gap-1.5 font-semibold transition-colors cursor-pointer py-1 group"
      >
        <span>View Full QA Audit</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-card border border-border/80 rounded-2xl max-w-lg w-full p-6 shadow-2xl neu-raised overflow-y-auto max-h-[90vh] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-4 mb-4">
              <div>
                <span className="font-mono text-[11px] text-primary uppercase tracking-wider font-semibold">
                  QA Audit &amp; Test Matrix
                </span>
                <h3 className="text-xl font-bold text-foreground mt-0.5">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground bg-surface-container hover:bg-surface-container-high transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-foreground/90">
              <div>
                <h4 className="font-semibold text-xs text-muted-foreground uppercase font-mono tracking-wider mb-1">
                  Executive Overview
                </h4>
                <p className="text-foreground/80 leading-relaxed">{project.detailedReport.overview}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-2 border-y border-border/50">
                <div className="bg-surface-container/60 p-2.5 rounded-xl border border-border/40 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center flex-none">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground">Test Cases Executed</div>
                    <div className="text-base font-bold text-primary">{project.testCaseCount || 40}+</div>
                  </div>
                </div>
                <div className="bg-surface-container/60 p-2.5 rounded-xl border border-border/40 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber/15 text-amber-bright flex items-center justify-center flex-none">
                    <Bug className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground">Critical Bugs Caught</div>
                    <div className="text-base font-bold text-amber-bright">{project.criticalBugsFound || 8}+</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-xs text-muted-foreground uppercase font-mono tracking-wider mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span>Scope of Validation</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-foreground/80 pl-4 list-disc marker:text-primary">
                  {project.detailedReport.scope.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-xs text-muted-foreground uppercase font-mono tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Bug className="w-3.5 h-3.5 text-amber-bright" />
                  <span>Key Defects Identified &amp; Resolved</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-foreground/80 pl-4 list-disc marker:text-amber-bright">
                  {project.detailedReport.defectsCaught.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-xs text-muted-foreground uppercase font-mono tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-primary" />
                  <span>Tools &amp; Frameworks Used</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.detailedReport.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-container text-foreground/85 border border-border/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
              <span className="font-mono text-xs text-[#0c312a] dark:text-mint-glow font-semibold inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>Status: {project.detailedReport.status}</span>
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="font-mono text-xs font-semibold px-4 py-2 rounded-full bg-primary text-primary-container hover:bg-mint-glow transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
