import React from "react";
import './MoviesCard.css'

function MoviesCard(props){

    const [isLikeActive, setIsLikeActive] = React.useState(false);

    function handleLike(){
        setIsLikeActive(!isLikeActive)
    }

    return(
        <div className="card-list">
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 словаssssssssssssssssssssssssssssssssssssss о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
                <div className="card-list__card">
                    <img className="card-list__card-img" src="https://images.wallpaperscraft.ru/image/volna_mazki_kraska_139597_2560x1440.jpg" alt="" ></img>
                    <div className="card-list__card-info">
                        <div className="card-list__card-name">33 слова о дизайне</div>
                        <div onClick={handleLike} className={isLikeActive ? "card-list__card-like card-list__card-like_active_no" : "card-list__card-like"}></div>
                    </div>
                    <div className="card-list__card-duration">1ч 47м</div>
                </div>
        </div>
    )
}

export default MoviesCard;