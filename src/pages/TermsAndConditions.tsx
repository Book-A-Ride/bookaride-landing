import LegalLayout from "../components/LegalLayout";

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Terms & Conditions" updated="August 2026">
      <p>
        These Terms &amp; Conditions govern your use of Book A Ride's
        website, waitlist and ride-booking services. This is placeholder
        content — replace it with your finalized terms before launch.
      </p>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">1. Eligibility</h2>
        <p className="mt-2">
          Book A Ride is intended for BOUESTI students and verified drivers
          within Ikere-Ekiti. By using our service, you confirm the
          information you provide is accurate.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">2. Bookings and fares</h2>
        <p className="mt-2">
          Fares are displayed before you confirm a ride. Book A Ride reserves
          the right to adjust pricing structures with reasonable notice to
          users.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">3. Driver verification</h2>
        <p className="mt-2">
          All drivers undergo a verification process before being approved
          to accept rides. Book A Ride does not guarantee uninterrupted
          driver availability at all times.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">4. User conduct</h2>
        <p className="mt-2">
          Riders and drivers agree to treat each other respectfully and
          follow applicable local laws while using the service. Misuse of
          the platform may result in suspension.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">5. Limitation of liability</h2>
        <p className="mt-2">
          Book A Ride facilitates connections between riders and drivers and
          is not liable for events outside our reasonable control during a
          ride.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">6. Changes to these terms</h2>
        <p className="mt-2">
          We may revise these Terms from time to time. Continued use of Book
          A Ride after changes take effect constitutes acceptance of the
          revised Terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-foreground">7. Governing law</h2>
        <p className="mt-2">
          These Terms are governed by the laws of the Federal Republic of
          Nigeria.
        </p>
      </section>
    </LegalLayout>
  );
}
