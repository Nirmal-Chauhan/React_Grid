import styles from './card.module.css'
const Card=()=>{
    return (
        <div className={styles.all_container}>
            
 <div className={styles.navbar}>
<div className={styles.leftmost}>
    <div className={styles.edyoda}>EDYODA</div>
   <div className={styles.stories}>Stories</div> 
</div>
<div>
    <p>Explore Categories </p>
</div>
<div className='para'>
    <p>EdYoda is a learning and knowledge <br/>sharing platform for techies</p>
</div>
<div>
    <button className={ styles.btn}> Go To Main Website </button>
</div>
            </div>

        
            {/* <div><h2>Trending Posts</h2></div> */}
        <div className={styles.maincontainer}>
            {/* <a href="#"> */}
            
            <div className={styles.cards}>
                <div className={styles.img}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg" alt="img1"/>
                </div>
                <div className="contents">
<div className={styles.title}>
    <h3>Fresh Graduate or IT professional Looking for a jo..</h3>
    <div className={styles.author}>
    <p><span>Arman Ahmed ||</span> <span>05 Jul 2019</span></p>
    </div>
    
</div>
<div className={styles.details}>
<p>If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology demand in the industry and also to evaluate</p>
</div>
                </div>
            </div>
            {/* </a> */}
            {/* <a href="#"> */}
            <div className={styles.cards}>
                <div className={styles.img}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg" alt="img2"/>
                </div>
                <div className="contents">
<div className={styles.title}>
    <h3>Introducing you all to EdYoda - www.edyoda.com</h3>
    <div className={styles.author}>
    <p><span>Arman Ahmed ||</span> <span>05 Jul 2019</span></p>
    </div>
    
</div>
<div className={styles.details}>
<p>Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.
Introducing you all to EdYoda - Open platform to learn cutting edge</p>
</div>
                </div>
            </div>
            {/* </a> */}
            {/* <a href="#"> */}
            <div className={styles.cards}>
                <div className={styles.img}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg" alt="img3"/>
                </div>
                <div className="contents">
<div className={styles.title}>
    <h3>From identity crisis to the Success Story - The DevOps revolution!</h3>
    <div className={styles.author}>
    <p><span>Kalyan Mahalingam ||</span> <span>05 Jul 2019</span></p>
    </div>
    
</div>
<div className={styles.details}>
<p>DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the</p>
</div>
                </div>
            </div>
            {/* </a> */}
            {/* <a href="#"> */}
            <div className={styles.cards}>
                <div className={styles.img}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg" alt="img4"/>
                </div>
                <div className="contents">
<div className={styles.title}>
    <h3>Typical day of Data Scientist - An insider</h3>
    <div className={styles.author}>
    <p><span>Sourav Ghosh ||</span> <span>05 Jul 2019</span></p>
    </div>
    
</div>
<div className={styles.details}>
<p>I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that</p>
</div>
                </div>
            </div>
            {/* </a> */}
            {/* <a href="#"> */}
            <div className={styles.cards}>
                <div className={styles.img}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg" alt="img5"/>
                </div>
                <div className="contents">
<div className={styles.title}>
    <h3>Amazon Web Services (AWS) Cloud Day -</h3>
    <div className={styles.author}>
    <p><span> Kalyan Mahalingam||</span> <span>05 Jul 2019</span></p>
    </div>
    
</div>
<div className={styles.details}>
<p>It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels</p>
</div>
                </div>
            </div>
            {/* </a> */}
            {/* <a href="#"> */}
            <div className={styles.cards}>
                <div className={styles.img}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg" alt="img6"/>
                </div>
                <div className="contents">
<div className={styles.title}>
    <h3>edYoda Meetup #01 : A Date with Cloud</h3>
    <div className={styles.author}>
    <p><span>Ashish Pandey ||</span> <span>05 Jul 2019</span></p>
    </div>
    
</div>
<div className={styles.details}>
<p>I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the</p>
</div>
                </div>
            </div>
            {/* </a> */}
        </div>
        </div>

    )
}
export default Card