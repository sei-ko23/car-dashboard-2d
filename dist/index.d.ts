import { FC } from 'react';

type DashbordProps = {
    scoketSignals: any;
    socketGps: any;
};

declare const VehicleDashboard: FC<DashbordProps>;

export { VehicleDashboard as default };
