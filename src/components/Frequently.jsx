import faq from '../assets/FaqWord.jpg'

const Frequently = () => {
    return (
        <div className='grid lg:grid-cols-5 gap-5 mt-20 mb-20 px-2'>
            <div className=' lg:col-span-2 '>
                <img className='w-full h-full rounded-md' src={faq} alt="" />
            </div>
            <div className="px-2 space-y-2 lg:col-span-3 flex flex-col justify-center">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How do I plan my trip to Southeast Asia?
                    </div>
                    <div className="collapse-content">
                        <p> Planning your trip to Southeast Asia is exciting! Start by researching the countries you want to visit, considering factors like weather, culture, and activities. Decide on your preferred travel dates and create a rough itinerary. Don't forget to check visa requirements and vaccination recommendations for each country you plan to visit. Our website offers destination guides and travel tips to help you plan the perfect trip.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What are the must-visit attractions in Southeast Asia?
                    </div>
                    <div className="collapse-content">
                        <p> Southeast Asia is brimming with incredible attractions! Must-visit spots include the ancient temples of Angkor Wat in Cambodia, the stunning beaches of Thailand's Phi Phi Islands, the bustling streets of Vietnam's Ho Chi Minh City, and the tranquil rice terraces of Bali, Indonesia. Our website provides detailed information on these attractions and many more to help you make the most of your trip.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Is Southeast Asia safe for travelers?
                    </div>
                    <div className="collapse-content">
                        <p>Generally, Southeast Asia is a safe destination for travelers. However, like any travel destination, it's essential to take precautions and be mindful of your surroundings. Petty theft and scams can occur in tourist areas, so it's advisable to keep your belongings secure and be cautious when dealing with strangers. Our website offers safety tips and advice to help you have a smooth and enjoyable trip.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is the best time to visit Southeast Asia?
                    </div>
                    <div className="collapse-content">
                        The best time to visit Southeast Asia depends on your destination and preferences. Generally, the dry season (from November to April) is ideal for most countries, offering sunny weather and minimal rainfall. However, some destinations, like Vietnam and Cambodia, experience a distinct wet season, which can affect travel plans. It's essential to research the weather patterns of your chosen destinations and plan accordingly.
                    </div>
                </div>


            </div>
           
      </div>
    );
};

export default Frequently;