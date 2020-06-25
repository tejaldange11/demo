import React,{Component} from 'react';
import {
    StyleSheet,TextInput,
    View,ImageBackground,Button,
    Text,TouchableOpacity,Image,
} from 'react-native';
import {Column as Col, Row} from "react-native-flexbox-grid";

class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    constructor() {
        super();
        this.state = {
            email:'',
            password:''
        };
    }


render(){
    const _email=this.props.navigation.state.params._email,
         _password=this.props.navigation.state.params._password,
         _fName=this.props.navigation.state.params._fName,
         _lName=this.props.navigation.state.params._lName

        return(
        <ImageBackground source={require('../images/signUp.png')}
                         style={{flex: 1,}}>

        <View style={{flex: 1,marginTop:50, }}>

            <Row size={12} style={{marginTop:30}}>
                <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                    <Text style={styles.textInput}>First Name:-</Text>
                </Col>
                <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                    <Text style={styles.textOutput}>{_fName}</Text>
                </Col>
            </Row>


                <Row size={12} style={{marginTop:10}}>
                <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                    <Text style={styles.textInput}>Last Name:-</Text>
                </Col>
                    <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                        <Text style={styles.textOutput}>{_lName}</Text>
                    </Col>
            </Row>


                <Row size={12} style={{marginTop:10}}>
                <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                    <Text style={styles.textInput}>Email Id:-</Text>
                </Col>
                    <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                        <Text style={styles.textOutput}>{_email}</Text>
                    </Col>
            </Row>


                <Row size={12} style={{marginTop:10,alignItems:'center'}}>
                <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                    <Text style={styles.textInput}>Password:-</Text>
                </Col>
                <Col sm={6} md={6} lg={6} style={{alignItems: 'flex-start',}}>
                    <Text style={styles.textOutput}>{_password}</Text>
                </Col>
            </Row>
        </View>
        </ImageBackground>
    )}
}
export default Home;

const styles = StyleSheet.create({
   textOutput:{
       padding: 10,
       color:'#0c0c0c',
       fontSize:18,
   },
    textInput:{
        padding: 10,
        paddingLeft:25,
        color:'#692b9e',
        fontSize:20,
        fontWeight:'bold'
    },

});