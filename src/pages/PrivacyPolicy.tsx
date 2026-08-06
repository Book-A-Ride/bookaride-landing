import LegalLayout from "../components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 2026">
      <p>
        This Privacy Policy explains how Book A Ride ("we", "us", "our")
        collects, uses and protects information when you use our website,
        waitlist and ride-booking services. This is placeholder content —
        replace it with your finalized policy before launch.
      </p>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">1. Information we collect</h2>
        <p className="mt-2">
          We may collect information you provide directly, such as your name,
          phone number, student status, and pickup or drop-off locations, as
          well as information collected automatically, such as device and
          usage data.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">2. How we use information</h2>
        <p className="mt-2">
          We use collected information to match riders with drivers, process
          bookings, verify driver identity, improve our service, and
          communicate updates about your rides or your place on the
          waitlist.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">3. Sharing of information</h2>
        <p className="mt-2">
          We share limited information between riders and matched drivers as
          needed to complete a ride. We do not sell personal information to
          third parties.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">4. Cookies</h2>
        <p className="mt-2">
          We use cookies to remember your preferences and understand how
          visitors use our site. You can accept or decline non-essential
          cookies at any time from the cookie banner.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">5. Data retention &amp; security</h2>
        <p className="mt-2">
          We retain information only as long as necessary to provide our
          services and take reasonable measures to protect it against
          unauthorized access.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">6. Your rights</h2>
        <p className="mt-2">
          You may request access to, correction of, or deletion of your
          personal information at any time by contacting us through the
          waitlist page.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">7. Changes to this policy</h2>
        <p className="mt-2">
          We may update this Privacy Policy from time to time. Continued use
          of Book A Ride after changes means you accept the revised policy.
        </p>
      </section>
    </LegalLayout>
  );
}
