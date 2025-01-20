export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-5">
        Our Contact Information
      </h1>
      <br />
      <br />
      <div className="lg:columns-2">
        <div className="mb-4">
          <p>
            <strong>Melissa Dodge</strong>
          </p>
          <p>
            <em>Executive Director</em>
          </p>
          <p>
            <a href="tel:360-901-0492">360-901-0492</a>
          </p>
          <p>
            Email:&nbsp;&nbsp;
            <a href="mailto:melissa@pnwfamilynavigation.org">
              melissa@pnwfamilynavigation.org
            </a>
          </p>
        </div>
        <div className="mb-4">
          <p>
            <strong>Anastacia Kaloudis</strong>
          </p>
          <p>
            <em>Board Member</em>
          </p>
          <p>
            Phone: <a href="tel:360-784-3991">360-784-3991</a>
          </p>
          <p>
            Email:&nbsp;&nbsp;
            <a href="mailto:kalouana@2be-inclusive.com">
              kalouana@2be-inclusive.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
