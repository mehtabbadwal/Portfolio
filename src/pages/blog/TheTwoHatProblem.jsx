import BlogPost, { Paragraph, SectionBreak, PullQuote } from '../../components/BlogPost';

function TheTwoHatProblem() {
  return (
    <BlogPost
      title="The Two-Hat Problem"
      date="MAY 19"
      author="MEHTAB BADWAL"
      readTime="7"
      heroImage="/two-hat-problem.svg"
      nextPost={{
        title: 'The Stickiness Trap',
        url: '/blog/the-stickiness-trap',
      }}
    >
      <Paragraph>
        On Monday the interface was fine. By Thursday she couldn&rsquo;t find what she needed.
      </Paragraph>

      <Paragraph>
        Nothing had changed about the product. Same ServiceNow login, same instance, same team. But on
        Monday she was working the incident queue directly &mdash; agent mode, eyes on tickets, moving
        through her workload. By Thursday she was reviewing team performance and clearing the approval
        backlog. Two different jobs inside the same product, four days apart.
      </Paragraph>

      <Paragraph>
        The interface treated both days identically.
      </Paragraph>

      <SectionBreak>
        Roles are administratively legible. Working modes are not.
      </SectionBreak>

      <Paragraph>
        Most enterprise products are designed around roles because roles are administratively legible.
        The org chart says this person is a Manager. ServiceNow gives them the manager view &mdash;
        oversight panels, approval queues, performance dashboards, the team activity feed. Clean, logical,
        and completely defensible as a design decision. The role maps to permissions, to visibility, to
        accountability. The product team ships the workspace and marks the ticket done.
      </Paragraph>

      <Paragraph>
        What it doesn&rsquo;t map to is how she actually spends her week.
      </Paragraph>

      <Paragraph>
        Organizational roles and working modes are not the same thing. A manager who also works incident
        tickets doesn&rsquo;t stop being a manager on Monday &mdash; but the product has no concept of
        what she needs when she&rsquo;s in agent mode. A team lead who&rsquo;s also the primary reviewer
        and occasionally an approver is, from the product&rsquo;s perspective, simply a Team Lead, with
        all the interface assumptions that come with it. The gap between the org chart and the actual work
        is where the friction lives, quietly, for years.
      </Paragraph>

      <Paragraph>
        This isn&rsquo;t theoretical. ServiceNow&rsquo;s own implementation guidance openly addresses
        it &mdash; deployments frequently use a single workspace for many roles, mixing the needs of
        agents, resolvers, and managers into one layout. The product knows the problem exists. The
        interface still assumes one role at a time.
      </Paragraph>

      <PullQuote>
        Users adapt. They build a mental model of which parts of the interface to ignore. They figure out
        which version of their role the product is currently serving and adjust their expectations
        accordingly. After a few months this becomes automatic &mdash; not frustrating anymore, just the
        way the tool works.
      </PullQuote>

      <SectionBreak>
        That&rsquo;s where it gets hard to fix.
      </SectionBreak>

      <Paragraph>
        When friction becomes habit, it disappears from feedback channels. Nobody files a ticket that says
        the interface assumes they&rsquo;re only ever one thing. They work around it &mdash; silently,
        efficiently, with a low-grade persistent sense that the product is never quite right for them. The
        workaround becomes invisible. The friction becomes competence. And the product team sees stable
        usage and reads it as satisfaction.
      </Paragraph>

      <Paragraph>
        Multi-role friction doesn&rsquo;t surface in your analytics. It surfaces in the moment someone
        opens a spreadsheet to do the part of their job the product won&rsquo;t accommodate.
      </Paragraph>

      <SectionBreak>
        The two-hat trap.
      </SectionBreak>

      <Paragraph>
        The framework I find most useful here is what I call the two-hat trap.
      </Paragraph>

      <Paragraph>
        Before any feature goes to design, map every mode a realistic user operates in within the same
        product during the same week. Not their title &mdash; their actual working modes. Reviewer,
        contributor, approver, lead, individual. Then ask two questions: does this feature make sense for
        each of those modes? And does the product ever let the user indicate which mode they&rsquo;re
        in right now?
      </Paragraph>

      <Paragraph>
        Most enterprise products fail the second question entirely. They treat role as a state &mdash;
        stable, exclusive, assigned once. You are a manager, full stop. What they&rsquo;re missing is
        that role is also a context &mdash; fluid, situational, shifting within a single afternoon.
        Designing for state is administratively tidy. Designing for context is what makes the product
        feel like it understands how work actually happens.
      </Paragraph>

      <PullQuote>
        The goal isn&rsquo;t to dismantle role-based design. The goal is to make sure the role is
        informing the product rather than defining the user. That when someone shifts modes &mdash; and
        in real organizations, they shift constantly &mdash; the interface shifts with them.
      </PullQuote>

      <Paragraph>
        A product that moves with how people actually work stops being something users navigate around.
        It becomes something they think with. That&rsquo;s a different and much harder design target.
        But it&rsquo;s the only one worth aiming at in organizations where nobody&rsquo;s job fits
        cleanly in a single box.
      </Paragraph>

      <Paragraph>
        Which, in enterprise software, is almost everyone.
      </Paragraph>
    </BlogPost>
  );
}

export default TheTwoHatProblem;
