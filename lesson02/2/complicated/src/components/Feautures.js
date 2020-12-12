import React from 'react';

class FeaturesSliderItem extends React.Component{
    constructor({ numberImg, text }){
        super();
        this.numberImg = numberImg;
        this.text = text;
    }
    render(){
        return <div className="features-slider_item">
            <div className="features-img" style={{backgroundImage: `url(../assets/images/${this.numberImg}.svg)`}}></div>
            <div className="features-feature">{this.text}</div>
        </div>
    }
}

class FeaturesSliderArrow extends React.Component{
    constructor({ direction }){
        super();
        this.direction = direction;
    }
    render(){
        return <button className={["features-slider-arrow", this.direction].join(' ')}>
            <svg width="9" height="16"
                    xmlns="http://www.w3.org/2000/svg">
                <path
                        d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                </path>
            </svg>
        </button>
    }
}

class Feautures extends React.Component{
    render(){
        return <section className="features">
            <div className="wrapper">
                <div className="features-wrapper">
                    <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                    <div className="features-subhead">О нас</div>
                    <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                                                    сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                                                    оратору отточить.
                    </div>
                    <div className="features-slider">
                        <div className="features-slider_items">
                            <FeaturesSliderItem numberImg="1" text="Первое целевое преимущество"/>
                            <FeaturesSliderItem numberImg="2" text="Второе целевое преимущество"/>
                            <FeaturesSliderItem numberImg="3" text="Третье целевое преимущество"/>
                            <FeaturesSliderItem numberImg="4" text="Четвертое целевое преимущество"/>
                        </div>
                        <FeaturesSliderArrow direction="features-slider-prev"/>
                        <FeaturesSliderArrow direction="features-slider-next"/>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Feautures;