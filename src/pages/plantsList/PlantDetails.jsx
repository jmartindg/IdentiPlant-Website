import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Loader from "../../components/Loader";

const PlantDetails = () => {
  const [plantDetails, setPlantDetails] = useState([]);
  const [plantImage, setPlantImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const fullDate = { year: "numeric", month: "long", day: "numeric" };

  let { id } = useParams();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const formatDate = (value, locale = "en-US") => {
    return new Date(value).toLocaleDateString(locale, fullDate);
  };

  // Fetch single herbal plant from api
  useEffect(() => {
    const fetchPlantDetails = async () => {
      setLoading(true);
      const response = await fetch(`https://whispering-lowlands-67883.herokuapp.com/api/posts/${id}?populate=*`);
      const data = await response.json();
      setPlantDetails(data.data.attributes);
      setPlantImage(data.data.attributes.plant_image.data.attributes.url);
      setLoading(false);
    };

    fetchPlantDetails();
    scrollToTop();

    // Change the page title
    if (plantDetails.length === 0) {
      document.title = "Loading";
    } else {
      document.title = `IdentiPlant - ${plantDetails.plant_name}`;
    }
  }, [id, plantDetails.plant_name]);

  return (
    <>
      {loading ? (
        <section className="min-h-screen">
          <div className="pt-52">
            <Loader />
          </div>
        </section>
      ) : (
        <section className="pb-24">
          <div
            className="min-h-[50vh] md:min-h-[70vh] bg-no-repeat bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${plantImage})` }}
          ></div>
          <div className="container mx-auto pt-20 px-4 lg:px-0">
            <h2 className="font-bold text-2xl border-l-[5px] border-green-600 pl-2 mb-2">{plantDetails.plant_name}</h2>
            <p className="font-medium">
              Scientific Name: <span className="font-normal">{plantDetails.plant_scientific_name}</span>
            </p>
            <p className="text-sm pt-3">
              <span className="font-medium">Published:</span> {formatDate(plantDetails.publishedAt)} &bull;{" "}
              <span className="font-medium">Updated:</span> {formatDate(plantDetails.updatedAt)}
            </p>
            <ReactMarkdown className="py-5 text-zinc-900">{plantDetails.plant_description}</ReactMarkdown>
            <h3 className="font-semibold text-xl">Benefits</h3>
            <ReactMarkdown className="py-5 text-zinc-900">{plantDetails.plant_benefits}</ReactMarkdown>
            <h3 className="font-semibold text-xl">Uses</h3>
            <ReactMarkdown className="py-5 text-zinc-900">{plantDetails.plant_uses}</ReactMarkdown>
            <h3 className="font-semibold text-xl">Tips</h3>
            <ReactMarkdown className="py-5 text-zinc-900">{plantDetails.plant_tips}</ReactMarkdown>
          </div>
        </section>
      )}
    </>
  );
};

export default PlantDetails;
