import {ViewStyle} from 'react-native';
import {Theme} from '../types';

export default function platformStyles(appStyle: Theme) {
  return {
    knob: {
      width: 50,
      height: 10,
      marginTop: 20,
      borderRadius: 3,
      backgroundColor: appStyle.agendaKnobColor
    },
    weekdays: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 15,
      paddingBottom: 7,
      backgroundColor: appStyle.calendarBackground
    }
  } as {[key: string]: ViewStyle};
}
