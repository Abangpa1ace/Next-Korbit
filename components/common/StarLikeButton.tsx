import React, { useState } from 'react'

interface Props {
  isLiked: boolean;
  onClick: () => void;
}

const StarLikeButton: React.FC<Props> = ({ isLiked, onClick }) => {
  const [isTooltip, setIsTooltip] = useState<boolean>(false);

  const onTooltip = () => {
    setTimeout(() => {
      setIsTooltip(false)
    }, 1500);

    setIsTooltip(true);
  }

  const toggleLike = (e) => {
    e.stopPropagation();
    onClick();
    onTooltip();
  }

  return (
      <div className="relative w-6">
        <svg onClick={toggleLike} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isLiked ? '#FFD400' : '#D4D4D4'} viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
        {isTooltip && <p className="absolute top-8 left-0 translate-x-1 w-40 p-2 bg-purple-100 text-center z-20 border-r-2 text-14">{`북마크가 ${isLiked ? '설정' : '해제'}되었습니다.`}</p>}
      </div>      
  )
}

export default StarLikeButton