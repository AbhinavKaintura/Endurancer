import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function FeaturedContent() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="text-center">
          <h2 className="text-3xl font-bold from-white to-gray-400 bg-gradient-to-r bg-clip-text text-transparent mb-6">
            Experience the Quality
          </h2>
          <p className="text-gray-300 mb-8">
            Try a sample of our content before you begin your journey
          </p>

          <div className="bg-gradient-to-r bg-gray-900 rounded-4xl p-8 mb-6 transition-transform hover:scale-115 shadow-lg duration-400 cursor-pointer">
            <div className="text-white text-center">
              <div className="text-4xl mb-4 flex items-center justify-center">
                <img
                  src="/icons/windy.png"
                  alt="windy Image"
                  className="h-[40px] w-[40px] text-white bg-white border rounded-full p-1 "
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 from-white to-gray-400 bg-gradient-to-r bg-clip-text text-transparent ">
                Nadi Shodhana: Alternate Nostril Breathing
              </h3>
              <p className="text-orange-100 mb-4">
                A 2-minute introduction to this powerful balancing technique
              </p>
              <Button variant="primary">Try Sample Content</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="text-white">
              <div className="text-2xl mb-2 flex items-center justify-center">
                <img
                  src="/icons/stairs-up.png"
                  alt="windy Image"
                  className="h-[40px] w-[40px] text-white bg-white border rounded-full p-1 "
                />
              </div>
              <p className="text-sm">For Beginners</p>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-2 flex items-center justify-center">
                <img
                  src="/icons/brain.png"
                  alt="windy Image"
                  className="h-[40px] w-[40px] text-white bg-white border rounded-full p-1 "
                />
              </div>
              <p className="text-sm">Reduce Stress</p>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-2 flex items-center justify-center">
                <img
                  src="/icons/concentrate.png"
                  alt="windy Image"
                  className="h-[40px] w-[40px] text-white bg-white border rounded-full p-1 "
                />
              </div>
              <p className="text-sm">Improve Focus</p>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-2 flex items-center justify-center">
                <img
                  src="/icons/sleeping.png"
                  alt="windy Image"
                  className="h-[40px] w-[40px] text-white bg-white border rounded-full p-1 "
                />
              </div>
              <p className="text-sm">Sleep Better</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
