import { FunctionComponent } from "react";
import type { JDBus } from "jacdac-ts";

interface Props {
    bus: JDBus
}

const Connection: FunctionComponent<Props> = (props) => {
    return (
        <div>
            {!props.bus.connected ?
                (
                    <div>
                        <button
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={() => props.bus.connect()}
                        >
                            Connect Microbit
                        </button>
                    </div>
                ) :
                (
                    <div className="fs-5 alert alert-success" role="alert">
                        Microbit connected
                    </div>
                )}
        </div>
    )
};

export default Connection;