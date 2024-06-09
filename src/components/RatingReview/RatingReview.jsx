import React, { useState } from "react";
import { useForm } from "react-hook-form";
import starIcon from "../../assets/star.svg";

function RatingReview() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [rating, setRating] = useState(0);

  const onSubmit = (data) => {
    if (rating >= 4) {
      window.location.href = "https://g.page/r/CYJsDGQX0iCJEBM/review";
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border p-5 ">
      {/* Name input field */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
      </div>

      {/* Email input field */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
      </div>

      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <div key={star} className="mb-5">
            <div className="flex items-center gap-2">
              <input
                onClick={() => {
                  setRating(star);
                }}
                type="radio"
                name="rating"
                {...register("rating", { required: true })}
                value={star}
                style={{
                  width: "20px",
                  height: "22px",
                  cursor: "pointer",
                }}
              />
              {Array.from({ length: star }, (_, index) => (
                <div key={index}>
                  <img src={starIcon} alt="" width="20" height="20" />
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {rating <= 3 && rating > 0 && (
        <div className="mb-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Write your review
          </label>
          <textarea
            id="message"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your message"
            rows="4"
            {...register("review", { required: true })}
          />
        </div>
      )}

      <div className="flex items-center mb-3">
        <input
          type="checkbox"
          id="terms"
          {...register("terms", { required: true })}
          className="h-6 w-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
          I agree to <span className="text-green-500">terms & conditions</span>{" "}
          provided by the company. By providing my phone number, I agree to
          receive text message from the business.
        </label>
      </div>

      <input
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      />
    </form>
  );
}

export default RatingReview;
