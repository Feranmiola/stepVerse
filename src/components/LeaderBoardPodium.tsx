const UserAvatarIcon = () => {
    return (
      <svg
        width="37"
        height="38"
        viewBox="0 0 37 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.620117" width="37" height="37" rx="18.5" fill="#007CFF" />
        <path
          d="M18.3203 24.792C17.3776 24.792 16.5599 24.6488 15.8672 24.3623C15.1797 24.0706 14.6432 23.6436 14.2578 23.0811C13.8724 22.5133 13.6693 21.8154 13.6484 20.9873H15.9688C16 21.3831 16.1146 21.7139 16.3125 21.9795C16.5156 22.2451 16.7865 22.4456 17.125 22.5811C17.4688 22.7165 17.8594 22.7842 18.2969 22.7842C18.724 22.7842 19.0964 22.7217 19.4141 22.5967C19.7318 22.4717 19.9792 22.2972 20.1562 22.0732C20.3333 21.8493 20.4219 21.5915 20.4219 21.2998C20.4219 21.0342 20.3438 20.8128 20.1875 20.6357C20.0312 20.4535 19.8021 20.2972 19.5 20.167C19.2031 20.0368 18.8385 19.9196 18.4062 19.8154L17.1328 19.5029C16.1276 19.2633 15.3464 18.8857 14.7891 18.3701C14.2318 17.8545 13.9531 17.1748 13.9531 16.3311C13.9531 15.6279 14.1406 15.0133 14.5156 14.4873C14.8958 13.9613 15.4141 13.5524 16.0703 13.2607C16.7318 12.9691 17.487 12.8232 18.3359 12.8232C19.2005 12.8232 19.9531 12.9717 20.5938 13.2686C21.2344 13.5602 21.7344 13.9691 22.0938 14.4951C22.4531 15.0212 22.6406 15.6305 22.6562 16.3232H20.3516C20.3099 15.8493 20.1094 15.4821 19.75 15.2217C19.3906 14.9561 18.9141 14.8232 18.3203 14.8232C17.9141 14.8232 17.5651 14.8831 17.2734 15.0029C16.987 15.1175 16.7682 15.2764 16.6172 15.4795C16.4661 15.6826 16.3906 15.917 16.3906 16.1826C16.3906 16.4639 16.474 16.6982 16.6406 16.8857C16.8125 17.068 17.0417 17.2191 17.3281 17.3389C17.6146 17.4587 17.9297 17.5602 18.2734 17.6436L19.3281 17.9014C19.8333 18.016 20.2995 18.167 20.7266 18.3545C21.1536 18.542 21.5234 18.7738 21.8359 19.0498C22.1484 19.3206 22.3906 19.641 22.5625 20.0107C22.7344 20.3805 22.8203 20.8076 22.8203 21.292C22.8203 22.0003 22.6406 22.6175 22.2812 23.1436C21.9271 23.6696 21.4141 24.0758 20.7422 24.3623C20.0703 24.6488 19.263 24.792 18.3203 24.792Z"
          fill="white"
        />
      </svg>
    );
  };

  
const TrophyMiniIcon = () => {
    return (
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.50214 9.98047V8.89713M10.0209 2.9388V2.9388C10.9183 2.9388 11.6459 3.66634 11.6459 4.5638V4.5638C11.6459 5.46126 10.9183 6.1888 10.0209 6.1888M2.97919 2.9388V2.9388C2.08172 2.9388 1.35419 3.66634 1.35419 4.5638V4.5638C1.35419 5.46126 2.08172 6.1888 2.97919 6.1888M6.22919 8.89713H6.77085C8.56578 8.89713 10.0209 7.44206 10.0209 5.64714V3.48047C10.0209 2.58301 9.29332 1.85547 8.39585 1.85547H4.60419C3.70672 1.85547 2.97919 2.58301 2.97919 3.48047V5.64714C2.97919 7.44206 4.43426 8.89713 6.22919 8.89713ZM4.60419 12.1471H8.39585C8.99416 12.1471 9.47919 11.6621 9.47919 11.0638V11.0638C9.47919 10.4655 8.99416 9.98047 8.39585 9.98047H4.60419C4.00588 9.98047 3.52085 10.4655 3.52085 11.0638V11.0638C3.52085 11.6621 4.00588 12.1471 4.60419 12.1471Z"
          stroke="#343434"
          stroke-width="0.8125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  

interface PodiumUser {
  username: string;
  steps: number;
  position: number;
  color: string;
  icon: React.FC;
}

interface LeaderboardPodiumProps {
  users: PodiumUser[];
}

const LeaderboardPodium = ({ users }: LeaderboardPodiumProps) => {
  // Find the maximum steps to calculate relative heights
  const maxSteps = Math.max(...users.map(user => user.steps));
  
  // Base height for the tallest bar (in pixels)
  const MAX_HEIGHT = 89;

  // Calculate height based on steps relative to max
  const calculateHeight = (steps: number) => {
    return Math.max((steps / maxSteps) * MAX_HEIGHT, 30); // Minimum height of 30px
  };

  // Sort users by position (1st, 2nd, 3rd)
  const sortedUsers = [...users].sort((a, b) => a.position - b.position);
  
  // Reorder array to show 2nd, 1st, 3rd
  const displayOrder = [
    sortedUsers.find(u => u.position === 2),
    sortedUsers.find(u => u.position === 1),
    sortedUsers.find(u => u.position === 3),
  ].filter(Boolean) as PodiumUser[];

  return (
    <div className="w-full flex-1 h-[174px] border-b-[1px] border-b-[#F4F4F4] flex flex-row items-end justify-center space-x-2">
      {displayOrder.map((user) => (
        <div 
          key={user.position}
          className="flex flex-col flex-1 w-1/3 items-center space-y-2 justify-center"
        >
          <div className="flex flex-col items-center justify-center space-y-1">
            <user.icon />
            <p className="text-sm text-[#313131] font-inter">
              @{user.username}
            </p>
            {user.position === 1 ? (
              <div className="flex flex-row items-center justify-center space-x-1">
                <TrophyMiniIcon />
                <p className="text-[13px] leading-none text-[#343434] font-inter">
                  1st
                </p>
              </div>
            ) : (
              <p className="text-[13px] leading-none text-[#343434] font-inter">
                {user.position === 2 ? "2nd" : "3rd"}
              </p>
            )}
          </div>
          <div 
            className="rounded-t-[12px] w-full transition-all duration-300"
            style={{
              backgroundColor: user.color,
              height: `${calculateHeight(user.steps)}px`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default LeaderboardPodium;
