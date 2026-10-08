/*
 * BYUI FTC ENGINEERING HANDBOOK PRESENTATION
 * Draft for team discussion.
 * Replace the placeholder content and images as the handbook is finalized.
 */
function App() {
  const SECTION_IDS = useSectionIds();
  useKeyboardNav(SECTION_IDS);

  return (
    <>
      <ProgressBar />
      <NavDots ids={SECTION_IDS} />
      <Logo ids={SECTION_IDS} />
      <Streaks />

      <Section id="hero" hero>
        <Reveal delay={80}>
          <h1 className="title">BYUI FTC<br />Engineering Handbook</h1>
        </Reveal>
        <Reveal delay={320}>
          <p className="lead" style={{ margin: "12px auto 0", color: "#a1a1a6" }}>
            A more organized, secure, and maintainable way to build projects.
          </p>
        </Reveal>
        <Reveal delay={500}>
          <p className="project-sub">Draft presentation · Version 1.2 proposed · October 2026</p>
        </Reveal>
      </Section>

      <Section id="why" eyebrow="Why we are doing this" title="Our projects need a common way of working">
        <Reveal delay={120}>
          <p className="lead">
            We build projects across GitHub, Google Apps Script, content.byui.edu,
            local servers, and other approved platforms. The technology may differ,
            but the way we organize and maintain our work should be consistent.
          </p>
        </Reveal>
        <SplitList
          left={{ title: "Current challenge", items: ["Different repository structures", "Documentation is inconsistent", "Deployment knowledge can stay with one person"] }}
          right={{ title: "Our goal", items: ["One clear engineering workflow", "Projects that others can understand", "Safer reviews, testing, and deployments"] }}
        />
      </Section>

      <Section id="changes" variant="alt" eyebrow="The main change" title="Every project follows the same foundation">
        <FeatureGrid items={[
          { icon: "📋", title: "Proposal first", desc: "Problems and solutions are discussed and approved before implementation." },
          { icon: "📁", title: "Consistent repositories", desc: "Every project keeps its source code, documentation, and deployment information in GitHub." },
          { icon: "🔀", title: "Pull Request workflow", desc: "Changes move through branches, review, testing, and protected environments." },
          { icon: "🔐", title: "Security by default", desc: "Access, secrets, permissions, hooks, and branch protection are part of the process." },
        ]} />
      </Section>

      <Section id="before-after" variant="dark" eyebrow="From inconsistent to repeatable" title="What will change in practice">
        <CompareTable
          heads={["Area", "Before", "With the handbook"]}
          rows={[
            ["Project start", "Work may begin informally", "Proposal and consultation first"],
            ["Repository", "Structure varies by project", "Standard files and naming"],
            ["Changes", "Different branch habits", "Pull Requests and protected branches"],
            ["Release", "Knowledge may be personal", "Documented review, testing, and deployment"],
          ]}
        />
      </Section>

      <Section id="approval" variant="alt" eyebrow="Project approval" title="A short path from problem to approved work">
        <Reveal delay={100}>
          <p className="lead">Employees identify problems and propose solutions. Approval is recorded before implementation begins.</p>
        </Reveal>
        <CompareTable
          heads={["Step", "What happens", "Result"]}
          rows={[
            ["Consultation", "Discuss the problem and proposed direction", "A clearer idea"],
            ["Proposal", "Submit the Project Proposal Issue", "Problem, solution, audience, time, platform, result"],
            ["Review", "Engineering leads consult with a Full-Time Employee", "Questions and changes identified"],
            ["Decision", "Record the decision in the issue", "Approved, changes, clarification, or not approved"],
          ]}
        />
      </Section>

      <Section id="repository" eyebrow="Repository standard" title="GitHub is the source of truth">
        <FeatureGrid items={[
          { icon: "📖", title: "README", desc: "Purpose, setup, roles, environments, deployment, and proposal link." },
          { icon: "🗂️", title: "Documentation", desc: "Use docs or the GitHub Wiki for deeper setup and operational information." },
          { icon: "⚙️", title: ".github", desc: "Keep reusable workflows, issue templates, and Pull Request templates here." },
          { icon: "🧭", title: "Naming", desc: "Use lowercase kebab-case repositories, clear branches, and consistent file names." },
          { icon: "💬", title: "Conventional Commits", desc: "Use readable commit messages such as feat, fix, docs, chore, and refactor." },
          { icon: "🏷️", title: "Semantic Versioning", desc: "Use MAJOR.MINOR.PATCH releases and tags such as v1.2.0." },
        ]} />
      </Section>

      <Section id="roles" eyebrow="Four project roles" title="Clear responsibility without unnecessary roles">
        <PillarGrid pillars={[
          { icon: "🏛️", title: "Owner", desc: "BYUI FTC is always the project Owner." },
          { icon: "✍️", title: "Author", desc: "Identifies the problem, proposes the solution, and builds it." },
          { icon: "🔎", title: "Reviewer", desc: "Reviews quality, security, maintainability, and alignment." },
          { icon: "🧪", title: "Tester", desc: "Validates functionality and records testing results." },
        ]} />
        <Reveal delay={420}>
          <p className="project-sub" style={{ marginTop: "28px" }}>
            One person may hold more than one role when appropriate, but no role may remain unassigned.
          </p>
        </Reveal>
      </Section>

      <Section id="access" variant="dark" eyebrow="Organization and repository access" title="Access is assigned by responsibility">
        <Reveal delay={100}>
          <p className="lead">Project roles and GitHub permissions are related, but they are not the same thing.</p>
        </Reveal>
        <CompareTable
          heads={["GitHub role", "Can do", "Must not do"]}
          rows={[
            ["Organization Owner", "Manage the organization and appoint/remove Owners", "Share Owner access casually"],
            ["Repository Administrator", "Manage repository settings, rules, Actions, and access", "Add or promote Organization Owners"],
            ["Collaborator", "Work on assigned repos and merge when rules pass", "Delete repos or protected branches"],
            ["Reviewer", "Review and approve changes when rules pass", "Bypass protections or change admin settings"],
            ["Tester", "Test changes and record testing results", "Approve merges or change admin settings"],
          ]}
        />
      </Section>

      <Section id="security" variant="dark" eyebrow="Branch protection and local hooks" title="Security is part of everyday development">
        <SplitList
          left={{ title: "Protected branches", items: ["dev", "stage when used", "main", "No direct pushes", "No force pushes or deletion"] }}
          right={{ title: "Validation layers", items: ["Pull Request review", "Required GitHub Actions checks", "Local hooks for immediate feedback", "Conventional Commit validation", "Formatting, linting, and quick tests"] }}
        />
        <Reveal delay={500}>
          <p className="project-sub" style={{ marginTop: "28px" }}>
            Local hooks help protect repositories, but GitHub branch protection remains the authoritative enforcement layer.
          </p>
        </Reveal>
      </Section>

      <Section id="hosting" variant="alt" eyebrow="Hosting and deployment" title="The platform can change; the standard does not">
        <CompareTable
          heads={["Project type", "Possible platform", "Required standard"]}
          rows={[
            ["Web app", "content.byui.edu or another approved platform", "Source, docs, and deployment information in GitHub"],
            ["Apps Script App", "Google Apps Script", "GitHub backup, clasp when practical, permissions and versions documented"],
            ["Internal application", "Local or internal server", "Repository, environments, testing, and deployment instructions"],
            ["Advanced database", "Paid database or cloud service", "Document platform and database needs in the proposal; approval follows the standard process"],
          ]}
        />
      </Section>

      <Section id="apps-script" eyebrow="Google Apps Script" title="Apps Script code belongs in GitHub too">
        <Reveal delay={100}>
          <p className="lead">Apps Script may run in Google, but GitHub remains the primary source of code history and documentation.</p>
        </Reveal>
        <PillarGrid pillars={[
          { icon: "💾", title: "Source control", desc: "Store .gs, .js, .html, and appsscript.json in the repository." },
          { icon: "🧩", title: "Environments", desc: "Separate Dev and Production when the system is important or high-impact." },
          { icon: "🔑", title: "Permissions", desc: "Use only required Google services and OAuth scopes with BYUI accounts." },
          { icon: "↩️", title: "Recovery", desc: "Use versioned deployments and return to the last known stable version when needed." },
        ]} />
      </Section>

      <Section id="handoff" variant="alt" eyebrow="When a team member leaves" title="Projects should remain understandable and accessible">
        <Reveal delay={100}>
          <p className="lead">The goal is not a separate handoff document. The repository itself must contain the information needed to continue the project.</p>
        </Reveal>
        <SplitList
          left={{ title: "Before departure", items: ["Update README and documentation", "Document current environment and deployment", "Verify Owner, Author, Reviewer, and Tester", "Remove personal-only access or credentials"] }}
          right={{ title: "Notify", items: ["Add or update the project departure page", "Inform the Engineering Lead", "Inform the appropriate Full-Time Employee", "Confirm access and maintenance responsibility"] }}
        />
      </Section>

      <Section id="benefits" eyebrow="What we gain" title="Less uncertainty, more continuity">
        <StatGrid items={[
          { num: "1", label: "Source of truth", hint: "GitHub repository" },
          { num: "4", label: "Core roles", hint: "Owner, Author, Reviewer, Tester" },
          { num: "2+", label: "Protected branches", hint: "dev, main; stage when used" },
          { num: "∞", label: "Knowledge preserved", hint: "Documentation and history" },
        ]} />
        <Reveal delay={400}>
          <p className="project-sub" style={{ marginTop: "30px" }}>
            The handbook gives us a shared baseline while still allowing projects to use the technology that fits their needs.
          </p>
        </Reveal>
      </Section>

      <Section id="implementation" variant="alt" eyebrow="Implementation plan" title="How we will put the handbook into practice">
        <CompareTable
          heads={["Phase", "What we will do", "Deliverable"]}
          rows={[
            ["1. Prepare", "Finalize the handbook, templates, and organization rules", "Approved baseline"],
            ["2. Pilot", "Apply the standards to selected projects", "Feedback and corrections"],
            ["3. Migrate", "Update existing repositories gradually", "Consistent project records"],
            ["4. Enforce", "Enable protections, checks, and required reviews", "Repeatable workflow"],
            ["5. Review", "Improve the standard as the team learns", "Maintained handbook"],
          ]}
        />
      </Section>

      <Section id="next-steps" variant="dark" eyebrow="What each project team does" title="The standard becomes part of the project">
        <SplitList
          left={{ title: "For a new project", items: ["Consult and submit the proposal", "Create the repository from the standard structure", "Assign the four project roles", "Configure branches, hooks, and checks", "Document before deployment"] }}
          right={{ title: "For an existing project", items: ["Add the README and project information", "Review access and protected branches", "Document environments and deployment", "Remove personal-only dependencies", "Adopt the standards gradually"] }}
        />
      </Section>

      <Section id="closing" closing variant="dark">
        <Reveal><p className="eyebrow">Questions and discussion</p></Reveal>
        <Reveal delay={180}><h2 className="closing__title">Build it once.<br />Maintain it together.</h2></Reveal>
        <Reveal delay={420}>
          <p className="lead" style={{ margin: "24px auto 0", color: "#a1a1a6" }}>
            BYUI FTC Engineering Handbook · Draft for team review
          </p>
        </Reveal>
      </Section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
