import styles from "./Card.module.css";
function Card(props){
  return(
    <>
        <div id="card">
             <div className={styles.card}>

    <div className={styles.cover}>
      <img src={props.coverPic} alt="" />
    </div>
    <div className={styles.avatar}>
      <img src={props.avatar} alt="Avatar"/>
    </div>


    <div className={styles.info}>
      <h2>{props.name}</h2>
      <p className={styles.email}>{props.email}</p>
      <span className={styles.status}>{props.status}</span>

      <div className={styles.details}>
        <p><strong>Age:</strong>{props.age}</p>
        <p><strong>City:</strong> {props.city},{props.country}</p>
        <p><strong>Hobby:</strong>{props.hobby}</p>
      </div>

      <div className={styles.skills}>
        <span>{props.skills[0]}</span>
        <span>{props.skills[1]}</span>
        <span>{props.skills[2]}</span>
      </div>


      <div className={styles.extras}>
        <div>
          <p>Profile Pic</p>
          <img src={props.profilePic} alt=""/>
        </div>
        <div>
          <p>Favorite Food</p>
          <img src={props.favoriteFoodPic} alt=""/>
        </div>
      </div>
    </div>
        </div>
        </div>
    </>
  );
}

export default Card