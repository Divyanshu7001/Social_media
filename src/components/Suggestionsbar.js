import React, { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export const Suggestionsbar = ({ suggestedFollowers, handleFollow }) => {
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  //console.log("Suggested Followers: ", suggestedFollowers);
  const navigate = useNavigate();
  return (
    <div className="mx-auto xss:space-y-2 lg:space-y-4 grow">
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
          Dive into the potential of quantum computing and its implications for
          solving complex problems in record time.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="opacity-80 font-semibold text-md md:text-lg text-gray-600">
          Suggested for You
        </h2>
        {suggestedFollowers.length > 4 ? (
          <h2
            className="opacity-80 text-md cursor-pointer text-gray-600"
            onClick={() => setShowAllSuggestions(!showAllSuggestions)}
          >
            {showAllSuggestions ? "View Less" : "View All"}
          </h2>
        ) : (
          <></>
        )}
      </div>

      <div
        className={`overflow-y-scroll md:h-auto h-fit xl:h-fit lg:h-auto py-1 lg:py-2 xl:py-0`}
        style={{ scrollbarWidth: "thin" }}
      >
        {suggestedFollowers.length > 0 ? (
          (showAllSuggestions
            ? suggestedFollowers
            : suggestedFollowers.slice(0, 3)
          ).map((follow) => (
            <div
              key={follow.id ? follow.id : follow.userId}
              className="w-auto mx-1 mb-1 flex justify-between items-center"
            >
              <div className="flex gap-[0.8vw] items-center">
                <div className="w-12 h-14">
                  {follow.image ? (
                    <img
                      src={`${follow.image}`}
                      onClick={() =>
                        navigate(
                          `/profile/${follow.id ? follow.id : follow.userId}`
                        )
                      }
                      alt="Avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <CgProfile
                      onClick={() =>
                        navigate(
                          `/profile/${follow.id ? follow.id : follow.userId}`
                        )
                      }
                      className="xss:w-10 xss:h-14 xs:w-12 xs:h-16"
                    />
                  )}
                </div>
                <p className="text-[#000] sm:text-lg xl:text-xl font-semibold">
                  {follow.name}
                </p>
              </div>
              <p
                onClick={() =>
                  handleFollow(follow.id ? follow.id : follow.userId)
                }
                className="text-[#0000FF] text-md font-semibold cursor-pointer"
              >
                Follow
              </p>
            </div>
          ))
        ) : (
          <p className="text-[#000] text-lg font-semibold mt-5">
            No Suggestions
          </p>
        )}
      </div>
    </div>
  );
};
