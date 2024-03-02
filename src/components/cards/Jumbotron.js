export default function Jumbotron({title, subTitle = "Welcome to React E-commerce Website"}) {
    return (
     <div className="container-fluid jumbotron"
     style={{ marginTop: "-6px", height: "400px"}}
     >
     <div className="row">
    <div className="col text-center p-5 jumbotron">
      <h1 className="fw-bold" style={{ fontSize: "55px"}}>{title}</h1>
      <p className="lead fw-bold">{subTitle}</p>
    </div>
     </div>
    </div>
    );
}