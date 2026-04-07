import BlogPost, { Paragraph, SectionBreak, PullQuote } from '../../components/BlogPost';

function StayOutOfTheWay() {
  return (
    <BlogPost
      title="Stay out of the way"
      date="MAR 1"
      author="MEHTAB BADWAL"
      readTime="4"
      heroImage="/stay-out-of-way.svg"
      prevPost={{
        title: 'The Shadow System Problem',
        url: '/blog/shadow-system-problem',
      }}
      nextPost={{
        title: 'When AI Shifts Control',
        url: '/blog/when-ai-shifts-control',
      }}
    >
      <Paragraph>
        I was giving my son a bath when I realized I was out of groceries.
      </Paragraph>

      <Paragraph>
        Okay, quick, I thought. I&rsquo;ll just open Amazon Fresh, find what I need,
        grab the earliest delivery window, done. Two minutes. Easy. My son was already
        splashing around asking me questions and wanting to play, so I really just
        needed to get this done fast.
      </Paragraph>

      <Paragraph>
        I opened the app and started typing. The results came up &mdash; but something
        was off. I was seeing regular Amazon items, not Amazon Fresh items. I stared at
        the screen for a second. Where&rsquo;s Amazon Fresh? How do I switch to just
        Fresh?
      </Paragraph>

      <Paragraph>
        Turns out, Amazon had tucked Amazon Fresh inside a horizontal scroll bar at the
        top of the screen. A scroll bar. With everything in it &mdash; Amazon Fresh,
        Whole Foods, the main Amazon store &mdash; all sitting in a little carousel that
        you&rsquo;d only find if you knew to look for it. I had to scroll sideways just
        to get to the thing I came for.
      </Paragraph>

      <Paragraph>
        It took me two to three minutes to figure that out. Which doesn&rsquo;t sound
        like a lot. But I had a four-year-old in a bathtub asking me why fish can
        breathe underwater. In a world with AI, this is what I get.
      </Paragraph>

      <Paragraph>
        Here&rsquo;s what it made me think though. When I was single, this
        wouldn&rsquo;t have been a problem. I had time. Fewer things competing for my
        attention. If an app made me scroll around for a bit, sure I&rsquo;ll do it and
        figure it out. I didn&rsquo;t feel the cost of it. Back then, I could afford to
        treat friction as interesting. Now I recognize it as unnecessary.
      </Paragraph>

      <Paragraph>
        But now I have two other humans as a family, which comes with more tasks and
        responsibilities in the same 24 hours. I value my time more and every minute I
        spend confused by an app is only adding to my anxiety. So, I feel that friction
        completely differently now. It&rsquo;s not a minor annoyance anymore.
        It&rsquo;s actually frustrating.
      </Paragraph>

      <SectionBreak>
        When I really thought about it, I realized the problem wasn&rsquo;t the
        navigation. It was about the state.
      </SectionBreak>

      <Paragraph>
        There are times when I&rsquo;m open to suggestions. Because let&rsquo;s be real
        sometimes these suggestions turn out to be helpful. Times when showing me Amazon
        Store options alongside Amazon Fresh options makes sense &mdash; I&rsquo;m
        browsing, I&rsquo;m comparing, I&rsquo;m open to being nudged somewhere new.
        But there are also times when I have already decided what I want to do. At that
        point I&rsquo;m not exploring. I already decided and I don&rsquo;t want the
        system to decide anything for me. I just needed to go.
      </Paragraph>

      <PullQuote>
        That was the usability problem. I didn&rsquo;t want Amazon to decide for me
        &mdash; I already knew what I wanted. All I wanted to do was execute what I had
        already decided.
      </PullQuote>

      <Paragraph>
        The system got in the way of that by treating me like I was still in a mode I
        had long left.
      </Paragraph>

      <Paragraph>
        The question is not if cross-selling is the problem. Cross-selling is important
        for businesses. It increases exposure, it drives revenue across multiple
        services, it makes sense from a product strategy perspective. I get all of that.
      </Paragraph>

      <Paragraph>
        The question is with consolidated platforms and features does the system
        understand the intent clearly and quickly? Once I know what I want to do, the
        system should know it too &mdash; or at least pick up on it fast enough. If a
        user is typing &ldquo;milk&rdquo; at 7:12 p.m. with a child in the bathtub, the
        system should probably know that this user needs Amazon Fresh or at least make it
        easy enough for the user to switch mode.
      </Paragraph>

      <Paragraph>
        I&rsquo;m not saying the system needs to know everything about me. But it should
        learn. It needs to recognize when I&rsquo;ve already decided what I want
        &mdash; versus when I actually need the system to help me decide. That&rsquo;s a
        very specific thing. And it&rsquo;s a solvable thing.
      </Paragraph>

      <PullQuote>
        If a platform is more consolidated &mdash; if it&rsquo;s housing Amazon Fresh
        and Whole Foods and the main store all under one roof &mdash; it has more
        responsibility to understand the intent of the user early enough to avoid that
        confusion and frustration.
      </PullQuote>

      <Paragraph>
        The bigger the platform, the more it owes the user that clarity.
      </Paragraph>

      <Paragraph>
        Design shouldn&rsquo;t assume how much time a person has. It should adapt to the
        fact that the answer changes moment to moment &mdash; sometimes even mid-bath.
      </Paragraph>
    </BlogPost>
  );
}

export default StayOutOfTheWay;
