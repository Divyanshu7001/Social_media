import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";

export const HomepageSuggestionsbar = ({ showPopup, suggestions }) => {
  const [expanded, setExpanded] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div
      style={{
        scrollbarWidth: "none",
      }}
      className={`fixed lg:top-24 ${
        isLargeScreen ? "right-3" : "left-5"
      } md:bottom-[16%] hidden mt-0.5  md:mt-0.5 lg:mt-3.5 w-1/5 md:flex flex-col lg:flex xl:w-1/5 lg:w-1/4 h-fit md:w-[32vw] xl:h-fit lg:h-fit md:h-fit md:me-5 lg:me-5 xl:me-10 py-3 rounded border-2 overflow-scroll ${
        showPopup ? "border-gray-400" : "border-gray-200"
      }  me-10 px-4 md:px-4 lg:px-5 mb-10 `}
    >
      <div className="md:space-y-2 lg:space-y-4 xl:my-3">
        <div className="flex-col justify-between items-center">
          <div className="home-suggestion-title">Top Stories</div>
          <p className="text-sm text-gray-600">
            Join our vibrant community of Information Technology scholars and
            researchers.
          </p>
        </div>
        <div className="flex-col justify-between items-center">
          <div className="home-suggestion-title">Top Journals</div>
          <p className="text-sm text-gray-600">
            IEEE Transactions on Computers
            <br />
            Journal of the ACM (JACM)
          </p>
        </div>
        <div className="flex-col justify-between items-center">
          <div className="home-suggestion-title">Top Articles</div>
          <p className="text-sm text-gray-600">
            Dive into the potential of quantum computing and its implications
            for solving complex problems in record time.
          </p>
        </div>

        {/* Suggestions */}
        <div className="flex justify-between">
          <Link
            to="/WhotoFollow"
            className="text-gray-600 font-bold text-sm md:text-sm lg:text-base"
          >
            Suggestions
          </Link>
          {!expanded && suggestions.length > 4 ? (
            <button
              onClick={() => setExpanded(true)}
              className="text-gray-600 hover:underline font-bold text-sm md:text-sm lg:text-base"
            >
              View all
            </button>
          ) : (
            <button
              onClick={() => setExpanded(false)}
              className="text-gray-600 hover:underline font-bold text-sm md:text-sm lg:text-base"
            >
              View Less
            </button>
          )}
        </div>
        <div className="space-y-3 overflow-y-scroll h-fit xl:h-fit lg:h-auto md:h-[200px] py-1 lg:py-2 xl:py-0">
          {suggestions.length > 0 ? (
            suggestions
              .slice(0, expanded ? suggestions.length : 4)
              .map((suggestion) => (
                <div
                  key={suggestion.userId}
                  className="flex items-center space-x-2"
                >
                  <img
                    src={suggestion.profile_img || "images/johnpaul.png"}
                    alt="Avatar"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <h2 className="font-semibold text-base">{suggestion.name}</h2>
                </div>
              ))
          ) : (
            <p>No suggestions available.</p>
          )}
        </div>
      </div>
    </div>
  );
};
