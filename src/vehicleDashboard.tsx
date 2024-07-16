import React, { FC, useState, useEffect } from "react";
//components
import {
    MidMap,
    RpmGauge,
    Top,
    SpeedGauge,
    SteerWheel,
} from "./components";
//types
import { DashbordProps, Signals } from "./dashboard.types";
//Helpers
import {
    rpmgKeys,
    speedKeys,
    topKeys,
    mapKeys,
    steerKeys,
} from "./Helpers";
//Style
import "./vehicleDashboard.css"
import "leaflet/dist/leaflet.css";


const VehicleDashboard: FC<DashbordProps> = ({ scoketSignals, socketGps }) => {
    const [signals, setSignals] = useState<Signals | undefined>(undefined);
    const [gps, setGps] = useState<any | undefined>(undefined);
    useEffect(() => {
        setSignals(scoketSignals);
        setGps(socketGps);
    }, [])

    function extractKeys(signals: any, keys: any) {
        if (signals) {
            return Object.fromEntries(
                Object.entries(signals).filter(([key]) => keys.includes(key))
            );
        } else {
            return;
        }
    }
    //keys extraction
    const extractedTop = extractKeys(signals, topKeys);
    const extractedRpm = extractKeys(signals, rpmgKeys);
    const extractedSpeed = extractKeys(signals, speedKeys);
    const extractedMap = extractKeys(gps, mapKeys);
    const extractedSteer = extractKeys(signals, steerKeys);

    return (
        <div>
            <div className="dashboard-container">
                <Top data={extractedTop} />
                <RpmGauge data={extractedRpm} />
                <MidMap value={extractedMap} />
                <SpeedGauge data={extractedSpeed} />
                <SteerWheel data={extractedSteer} />
            </div>
        </div>
    );
};

export default VehicleDashboard;
