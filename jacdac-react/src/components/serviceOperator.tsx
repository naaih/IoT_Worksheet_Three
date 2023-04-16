import { FunctionComponent } from "react";
import { SRV_ACCELEROMETER } from "jacdac-ts";
import ServiceSpec from "./serviceSpec";
import Accelerometer from "./serviceImpl/accelerometer";
// import Temperature from "./serviceImpl/temperature";
// import SoundLevel from "./serviceImpl/soundlevel";
// import DotMatrix from "./serviceImpl/dotmatrix";

interface Props {
    serviceClass: number;
    setServiceClass: (serviceClass: number) => any;
}

const ServiceOperater: FunctionComponent<Props> = (props) => {

    const operator = () => {
        switch (props.serviceClass) {
            case SRV_ACCELEROMETER:
                return <Accelerometer />;
            /*
            case SRV_TEMPERATURE:
                return <Temperature />;
            case SRV_SOUND_LEVEL:
                return <SoundLevel />;
            case SRV_DOT_MATRIX:
                return <DotMatrix />;
            */
            default:
                return <ServiceSpec serviceClass={props.serviceClass} />;
        }
    };

    return (
        <div className="p-1 m-1 shadow rounded">
            {
                props.serviceClass !== -1
                &&
                <div>
                    <div className="p-1 m-1">
                        <button
                            type="button"
                            className="btn btn-sm btn-close"
                            onClick={() => props.setServiceClass(-1)}
                        />
                    </div>
                    <div className="p-1 m-1">
                        {operator()}
                    </div>
                </div>
            }
        </div>
    )
}

export default ServiceOperater;