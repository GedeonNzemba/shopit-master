import  React  from  'react';
import CoolTabs from 'react-cool-tabs';


const TabMobile = ({ productsGrid, productsInfo }) => {

   return (
     <div>
	     <CoolTabs
	       tabKey={'1'}
	       style={{ width:  '100%', height:  "100%", background:  'white' }}
	       activeTabStyle={{ background:  '#313962', color:  'white' }}
	       unActiveTabStyle={{ background:  '#272727', color:  'white' }}
	       activeLeftTabBorderBottomStyle={{ background:  '#1add72', height:  4 }}
	       activeRightTabBorderBottomStyle={{ background:  '#1add72', height:  4 }}
	       tabsBorderBottomStyle={{ background:  '', height:  4 }}
	       rightContentStyle={{ background:  '' }}
	       leftTabTitle={'Products Grid'}
		   leftTabTitleStyle={{fontSize: '1.6rem'}}
	       rightTabTitle={'Modify Products'}
		   rightTabTitleStyle={{fontSize: '1.6rem'}}
	       leftContent={productsGrid}
	       rightContent={productsInfo}
		   contentContainerStyle={{height: '100vh'}}
		   leftContentStyle={{overflow: 'auto'}}
	       contentTransitionStyle={'transform 0.6s ease-in, overflow auto'}
	       borderTransitionStyle={'all 0.6s ease-in'}/>
     </div>

   )
}

export default TabMobile