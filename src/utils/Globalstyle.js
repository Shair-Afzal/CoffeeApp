import {StyleSheet} from 'react-native'
import { AppColors, RF } from './Responsive';


export const GST=StyleSheet.create({
  FLEXGROW:{
    flexGrow:1,
    paddingHorizontal:"4.5%",
    marginBottom:"1%" ,
    backgroundColor:AppColors.primaryBlackHex
  },
  FLEX:{
    flex:1
  
  },
    CENTER: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      SPACEBETWEEN: {
        justifyContent: 'space-between',
      },
      AlignSelf:{
   alignSelf:'center'
      },
      MAIN: {
        flex: 1,
        backgroundColor: AppColors.primaryBlackHex,
        paddingHorizontal:"4.5%"
      },
      MODALMAIN: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      ROW: {
        flexDirection: 'row',
      },
      mid_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      COLUMN: {
        flexDirection: 'column',
      },
      FLEXWRAP: {
        flex: 1,
        flexWrap: 'wrap',
      },
      CENTERCONTAINER:{
       flexDirection:"row",
       justifyContent:"space-between",
       width:"100%",
       alignItems:"center"
      },
      heading:{
        fontSize:RF(20),
        color:AppColors.primaryWhiteHex
      },
      subHeading:{
        fontSize:RF(18),
        color:AppColors.primaryWhiteHex
      },
      description:{
        fontSize:RF(16),
        color:AppColors.primaryWhiteHex
      },
      subdescription:{
        fontSize:RF(14),
        color:AppColors.primaryWhiteHex
      },
      smallesttxt:{
        fontSize:RF(10),
        color:AppColors.primaryWhiteHex
      }
      
      
});

