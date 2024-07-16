export type DashbordProps = {
  scoketSignals: any;
  socketGps: any;
};

export type SvgComponentsType = {
  component: JSX.Element;
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
  transform?: string;
  append?: any;
}[];
export type UINStatus = {
  [key: string]: {
    UIN: string;
    state: string;
  };
};

export type Signals = UINStatus & { UIN: string };

interface ValueUnit {
  value: string;
  unit: string;
}

interface TopProps {
  DDE_CLNGNT_DRT?: ValueUnit;
  DDE_CLNGNT_GCHE?: ValueUnit;
  VALEUR_SOC_ETENDUE?: ValueUnit;
  INFO_NIV_CARB?: ValueUnit;
  UIN?: string | undefined;
}
interface RpmProps {
  ETAT_FEUX_CROIST?: ValueUnit;
  ETAT_FEUX_ROUTE?: ValueUnit;
  BOUC_CEINT_COND?: ValueUnit;
  BOUC_CEINT_PASS?: ValueUnit;
  PEM_STATOR_TEMP?: ValueUnit;
  REGIME_MOTEUR?: ValueUnit;
  ETAT_OUVRANTS?: ValueUnit;
}
interface SpeedProps {
  VITESSE_VEHICULE?: ValueUnit;
  KILOMETRAGE?: ValueUnit;
  FREINAGE_EN_COURS?: ValueUnit;
  ESPACT?: ValueUnit;
  OUV_CAPOT_ALE_EVE_US?: ValueUnit;
  ETAT_CPO_LUNETTE?: ValueUnit;
  ETAT_CPO_COND_REPLI?: ValueUnit;
  REGUL_ABR?: ValueUnit;
}
export interface DataTypes {
  data?: TopProps & RpmProps & SpeedProps;
}
