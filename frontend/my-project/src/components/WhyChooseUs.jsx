export default function WhyChooseUs() {
  const features = [
    "TVET-Aligned Training",
    "Hands-On Practical Learning",
    "Short & Intensive Courses",
    "Affordable Fees",
    "Industry-Relevant Curriculum",
    "Student-Friendly Hostels",
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-md hover:shadow-xl transition">
              <div className="card-body text-center">
                <h3 className="font-semibold text-lg text-primary">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}