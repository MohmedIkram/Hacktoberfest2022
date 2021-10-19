import { useParams } from "react-router";
import { useSelector } from "react-redux";
import "./Planet.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { planetAction } from "../../store/planetSlice";
import Button from "../Button/Button";

export default function Planet() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [planet] = useSelector((state) =>
    state.planet.data.filter((item) => item.name === id)
  );
  const curState = useSelector((state) => state.planet.curState);
  const Content = useSelector((state) => state.planet.overview);

  useEffect(() => {
    dispatch(planetAction.changeOverview({ planet, type: "overview" }));
  }, [dispatch, planet, planet.overview]);

  const change = (type) => {
    dispatch(planetAction.changeOverview({ planet, type }));
  };

  const geologyImg = () => {
    return (
      <>
        <img src={planet.images.planet} alt="" />
        <img src={planet.images.geology} className="geology" alt="" />
      </>
    );
  };

  return (
    <>
      <Button id={id} change={change}/>
      <div className="container">
      
        <div className="row row-1">
          <div className="planet-img">
            {curState === "overview" && (
              <img src={planet.images.planet} alt="" />
            )}
            {curState === "structure" && (
              <img src={planet.images.internal} alt="" />
            )}
            {curState === "geology" && geologyImg()}
          </div>
          <div className="planet-details">
            <div className="col-1">
              <h1>{planet.name.toUpperCase()}</h1>
              <p className="details">{Content.content}</p>
              <p className="source">
                SOURCE:{" "}
                <span>
                  <a href={Content.source} target="_blank">
                    Wikipedia
                  </a>
                </span>
              </p>
            </div>
            <div className="col-1">
              <button
                className={`${id}-button`}
                onClick={() => change("overview")}
              >
                OVERVIEW
              </button>
              <button
                className={`${id}-button`}
                onClick={() => change("structure")}
              >
                INTERNAL STRUCTURE
              </button>
              <button
                className={`${id}-button`}
                onClick={() => change("geology")}
              >
                SURFACE GEOLOGY
              </button>
            </div>
          </div>
        </div>
        <div className="row row-2">
          <div className="col-1">
            <p>ROTATION TIME</p>
            <h1>{planet.rotation}</h1>
          </div>
          <div className="col-1">
            <p>REVOLUTION TIME</p>
            <h1>{planet.revolution}</h1>
          </div>
          <div className="col-1">
            <p>RADIUS</p>
            <h1>{planet.radius}</h1>
          </div>
          <div className="col-1">
            <p>AVERAGE TEMP</p>
            <h1>{planet.temperature}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
