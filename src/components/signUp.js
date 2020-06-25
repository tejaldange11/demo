import React,{Component} from 'react';
import {
    StyleSheet,TextInput,
    View,ImageBackground,
    Text,TouchableOpacity,Image,
} from 'react-native';


class SignUp extends Component {
    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    constructor() {
        super();
        this.state = {
            email:'',
            password:'',

            _email:'',
            _password:'',
            _fName:'',
            _lName:''
        };
    }



    render() {

            const _email = this.props.navigation.state.params.email,
                _password = this.props.navigation.state.params.password,
                _fName = this.props.navigation.state.params.fName,
                _lName = this.props.navigation.state.params.lName

            console.log("*********", _email, _password,
                _fName, _lName)
       
        return (
            <ImageBackground source={require('../images/signUp.png')}
                             style={{flex: 1,}}>

                <View style={{flex: 1, marginTop: 35,}}>
                    <View style={{alignItems: 'flex-start', marginLeft: '5%'}}>

                        <Text style={{
                            fontSize: 30, fontWeight: 'bold',
                            paddingLeft: 15, marginTop: 40, color: 'rgba(75,10,113,0.79)'
                        }}>Welcome back!
                        </Text>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 30}}>

                        <TextInput
                            value={this.state.emailId}
                            onChangeText={(emailId) => this.setState({ emailId })}
                            placeholder="Email ID"
                            placeholderTextColor='#808080'
                            label='Email ID'
                            style={[styles.input, {marginTop: 30}]}
                        />
                        <TextInput
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor='#808080'
                            label='Password'
                            style={[styles.input, {marginTop: 20}]}
                        />


                        <TouchableOpacity
                            onPress={()=>
                               this.props.navigation.navigate('Home',{
                                   _email,_fName,_lName,_password
                               })
                            }
                            style={styles.button}
                        >
                            <Text style={{
                                color: '#fff',
                                fontSize: 20, fontWeight: 'bold'
                            }}>Sign in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity

                            style={{
                                marginTop: 40,
                                alignItems: "center",
                                backgroundColor: 'rgba(245,242,246,0.79)',
                                padding: 10,
                                width: '50%',
                                paddingBottom:15,
                                paddingTop:15,
                                borderRadius: 25,
                                borderWidth:0.2,
                                borderColor:'#a39898'
                            }}
                        >
                            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 17, fontWeight: 'bold',
                                    paddingRight:20,
                                }}>Sign in with</Text>
                                <Image
                                    style={{height:20,width:20}}
                                    source={require('../images/google.png')}/>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop:40,
        alignItems: "center",
        backgroundColor: 'rgba(75,10,113,0.79)',
        padding: 10,
        width:'45%',
        borderRadius:12,

    },
    input: {
        width: '80%',
        height: 44,
        fontSize:14,
        padding: 10,
        borderBottomWidth:1,
        borderColor: 'black',
        marginBottom: 10,
    },
});

export default SignUp;
