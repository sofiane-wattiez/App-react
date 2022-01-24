import * as React from 'react';
import RegisterLink from '../button/RegisterLink';
import LoginLink from '../button/LoginLink';
import ForFreeLink from '../button/ForFreeLink';
import Separator from '../layout/Separator';
import { View } from 'react-native';



// construction de l'affichage
function HomeLink() {
    return (
        <View style={{ flex: 1}}>
            {/* Se connecter (pro account => login | new inscription => register) */}
            <RegisterLink  style={{ flex: 0.5 }} />
            <LoginLink style={{ flex: 0.5 }}/>
            <Separator />
            {/* Continuer sans inscription (free user) */}      
            <ForFreeLink style={{ flex: 0.5 }}/>
        </View>
    );
}


export default HomeLink;
