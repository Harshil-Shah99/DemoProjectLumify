import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Button, Icon,TouchableOpacity,Image,ScrollView } from 'react-native';
import {createDrawerNavigator,navigation,createStackNavigator} from 'react-navigation';
import SearchBar from 'react-native-search-bar'




class Q1 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>1. How do I download the Lumify app?</Text>
      <Text style={styles.AnswerStyle}>You can download the Lumify app from the Google Play Store at play.google.com/store/apps/details?id=com.philips.hc.ultrasound.lumify.</Text>
      </View>
    );
  }
}

class Q2 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>2. How do I install the Lumify application?</Text>
      <Text style={styles.AnswerStyle}>Lumify automatically installs once you have downloaded it to your smart device from the Google Play store. In rare cases, the security settings on your device may prevent Lumify from installing. If this occurs, please check your device security settings or contact your local IT department for assistance.</Text>
      </View>
    );
  }
}

class Q3 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>3. Can I use the Lumify application with non-Lumify transducers?</Text>
      <Text style={styles.AnswerStyle}>No. The Lumify app works only with Lumify transducers. If you connect a non-Lumify transducer to your device, the Lumify app works in demo mode only.</Text>
      </View>
    );
  }
}

class Q4 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>4. How will I know when a Lumify application update is available?</Text>
      <Text style={styles.AnswerStyle}>You can configure your device to update apps individually or allow them to be updated automatically. If your Lumify-compatible device is configured to automatically update apps, the Lumify app updates automatically when an update is available, unless the update includes a permissions change. In that case, you are prompted to update the Lumify app. If your device is configured to update apps individually, you can obtain the latest Lumify update from the Google Play Store. For more information, search for "update apps" in Google Play Help.</Text>
      </View>
    );
  }
}

class Q5 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>5. Can I transfer my Lumify app to a new device?</Text>
      <Text style={styles.AnswerStyle}>Yes. Download and install the Lumify app from the Google Play Store onto your new device, connect your Lumify transducer, and then follow the easy registration steps. Lumify cannot transfer patient data between devices. You can save patient data from your previous device to a network share, local repository, DICOM server, or external storage.</Text>
      </View>
    );
  }
}

class Q6 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>6. Can I use any USB cable to connect my transducer to my device?</Text>
      <Text style={styles.AnswerStyle}>No. The Lumify transducer is a high-quality medical-grade product and requires a special cable to ensure that you achieve the highest quality performance from your Lumify system. We only guarantee that the Lumify system will perform to specifications when you use the Philips-approved Lumify cable with your transducer.</Text>
      </View>
    );
  }
}

class Q7 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>7. What happens if I use a smart device that is not on the compatible devices list?</Text>
      <Text style={styles.AnswerStyle}>We work hard to maintain a current list of compatible devices www.philips.com/lumify-compatible-devices. All of the devices on our compatibility list have been rigorously tested. We ask you to pick a device from this list to ensure complete compatibility</Text>
      </View>
    );
  }
}

class Q8 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>8. Which smart devices are compatible with Lumify?</Text>
      <Text style={styles.AnswerStyle}>A list of smart devices Philips has tested and determined to be fully compatible with the Lumify application and transducer can be found here: www.philips.com/lumify-compatible-devices.</Text>
      </View>
    );
  }
}

class Q9 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>9. How do I make sure that the data I store on my Lumify-compatible device is secure?</Text>
      <Text style={styles.AnswerStyle}>The Android operating system and each device manufacturer provides methods for securing the data on your device, such as data encryption and use of passwords for access. We highly recommend that you consult with your local IT Security department to ensure that your device is implemented in accordance with your specific security requirements.</Text>
      </View>
    );
  }
}

class Q10 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>10. Is the Lumify product HIPAA compliant?</Text>
      <Text style={styles.AnswerStyle}>The Lumify app integrates with your security policies and uses the communication protocols set up by your instutition. The Android operating system provides protective mechanisms such as password protection and encryption. The Android OS also provides an industry-standard mechanisms to protect data in transit through enterprise-level authentication and encryption.</Text>
      </View>
    );
  }
}

class Q11 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>11. How do I register my new Lumify product?</Text>
      <Text style={styles.AnswerStyle}>You must have internet access to register Lumify. First, connect your device to a wireless or cellular network. Next, connect your Lumify transducer to your device, and then follow the step-by-step instructions that appear in the Lumify app.

      However, if your purchase is a Lumify system bundle (kitted solution -USA only), it comes pre-registered from the factory. You do not need to re-register (or be online before using the system). The only reason to re-register it would be if there is a change to the hardware or software configuration of your already registered Lumify system.</Text>
      </View>
    );
  }
}

class Q12 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>12. Can I connect my Lumify transducer to more than one device?</Text>
      <Text style={styles.AnswerStyle}>Yes. You can use a Lumify transducer on as many devices as you would like. You must register the transducer the first time you connect it to a new device. After initial registration, you can use the transducer without re-registering.</Text>
      </View>
    );
  }
}

class Q13 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>13. Why can’t I find the Lumify app on the Google Play store?</Text>
      <Text style={styles.AnswerStyle}>If you cannot locate the Lumify app on the Google Play Store, make sure that your device and Android OS meet the Lumify system requirements, and that you are visiting the Google Play Store from a country in which Lumify is available.</Text>
      </View>
    );
  }
}

class Q14 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>14. How do I configure my tablet for network connectivity?</Text>
      <Text style={styles.AnswerStyle}>See the documentation that accompanies your device for instructions on how to configure your device for wireless or cellular network connectivity.</Text>
      </View>
    );
  }
}

class Q15 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>15. How do I transfer images from my device to an external archive location?</Text>
      <Text style={styles.AnswerStyle}>You can export exams and images to a DICOM PACS, to a network share, or to a local repository. You can also e-mail images. For more information, see the Lumify User Manual at www.philips.com/lumify-manual.</Text>
      </View>
    );
  }
}

class Q16 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>16. How do I delete all patient information from my device?</Text>
      <Text style={styles.AnswerStyle}>To delete patient information from Lumify, select Settings and then select Reset Database in Patient Database. To delete all data from your device, reset your device. For instructions, see the documentation that accompanies your device.</Text>
      </View>
    );
  }
}

class Q17 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>17. Is it okay for me to update the OS on my device?</Text>
      <Text style={styles.AnswerStyle}>Yes. Philips actively tests compatibility with the Lumify app as new OS versions are released.</Text>
      </View>
    );
  }
}

class Q18 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>18. How large is the Lumify App?</Text>
      <Text style={styles.AnswerStyle}>The Lumify App is very small -- approximately 50 MB in size, which is less than the size of a typical MP3 tune.</Text>
      </View>
    );
  }
}

class Q19 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>19. Can I connect Lumify to an external monitor?</Text>
      <Text style={styles.AnswerStyle}>Yes. You can "cast" your Android devices display to an external monitor via a Chromecast dongle. For more information, visit support.google.com/chromecast/answer/2998456?hl=en</Text>
      </View>
    );
  }
}

class Q20 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>20. Is there a way to bypass Android sleep settings and have the device remain continuously on while the Lumify app is active?</Text>
      <Text style={styles.AnswerStyle}>There is an android app called “Stay Alive” that does just this. You can get it at play.google.com/store/apps/details?id=com.synetics.stay.alive&hl=en</Text>
      </View>
    );
  }
}

class Q21 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>21. Does Lumify support WPA enterprise Wi-Fi security?</Text>
      <Text style={styles.AnswerStyle}>Compatible Android devices support existing Wi-Fi security protocols, including security certificates. The compatible devices list is available at www.philips.com/Lumify-Compatible-Devices.</Text>
      </View>
    );
  }
}

class Q22 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>22. Can I move the focal zone by touching the screen and dragging?</Text>
      <Text style={styles.AnswerStyle}>No. Lumify automatically adjusts the number and position of focal zones based on the preset application, color box position, and depth. </Text>
      </View>
    );
  }
}

class Q23 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>23. Does Lumify include Autoscan?</Text>
      <Text style={styles.AnswerStyle}>Yes. Autoscan, sometimes called Autogain or Live iScan, adjusts the gain of every line of every image in real time, and ensures that the overall brightness of the image is maintained. Autoscan eliminates the need for you to adjust TGC (time gain compensation).</Text>
      </View>
    );
  }
}

class Q24 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>24. Can I export PC format images from Lumify?</Text>
      <Text style={styles.AnswerStyle}>Yes. You can email the exam with the images in PC format, or export the images to a local directory from which you can connect your computer. For more information, see your Lumify User Manual.</Text>
      </View>
    );
  }
}

class Q25 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>25. Can I export DICOM format images from Lumify?</Text>
      <Text style={styles.AnswerStyle}>You can configure a DICOM destination and export to a DICOM PACS. Your IT department can provide the network information needed to configure the DICOM destination. For more information, see your Lumify User Manual.</Text>
      </View>
    );
  }
}

class Q26 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>26. How do I to configure Lumify for network connectivity?</Text>
      <Text style={styles.AnswerStyle}>For information about configuring your device for wireless networking, see the Lumify Ultrasound System User Manual www.philips.com/lumify-manual.</Text>
      </View>
    );
  }
}

class Q27 extends React.Component{
  render(){
    return(
      <ScrollView style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>27. Why can’t I export exams to a DICOM PACS?</Text>
      <Text style={styles.AnswerStyle}>Try these troubleshooting tips:
        • Make sure that your device has constant wireless or cellular network connectivity. For information about configuring your device for wireless or cellular networking, see the documentation that accompanies your device.
        • Test the connection to the DICOM PACS: Select the export destination, and touch Test. For more information, see your Lumify User Manual.
        • Work with your network administrator to make sure the DICOM Destination Settings in Lumify are correct. For more information, see your Lumify User Manual.</Text>
      </ScrollView>
    );
  }
}

class Q28 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>28. How do I capture an image in Mmode ?</Text>
      <Text style={styles.AnswerStyle}>To capture an M-Mode image, freeze the image with the desired M-Mode trace and then touch Save Image. The image is added to the patient record as you see it on the screen.</Text>
      </View>
    );
  }
}

class Q29 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>29. Why do I need to provide my contact details when I register my transducer?</Text>
      <Text style={styles.AnswerStyle}>If you purchased the transducer outright, it is important that Philips has your most up-to-date contact information to communicate important product information and updates to you.</Text>
      </View>
    );
  }
}

class Q30 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>30. How can I change the language in the Lumify app?</Text>
      <Text style={styles.AnswerStyle}>If you purchased the transducer outright, it is important that Philips has your most up-to-date contact information to communicate important product information and updates to you.</Text>
      </View>
    );
  }
}

class Q31 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>31. How do I opt in to receive communication about products and promotions from Philips?</Text>
      <Text style={styles.AnswerStyle}>To receive Lumify-related communication from Philips, select Keep Me Informed of News, Products, and Promotions From Philips when you register your transducer. To stop receiving Lumify-related communication, select the Unsubscribe link in any Philips Lumify e-mail.</Text>
      </View>
    );
  }
}

class Q32 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>32. What is a Lumify System bundle? How is it different from the Lumify Ultrasound solution?</Text>
      <Text style={styles.AnswerStyle}>The Lumify Ultrasound Solution consists of one or more Philips transducers, and the Philips Lumify app, which needs to be installed on a compatible smart device (not included). With a Lumify System bundle, Philips provides the Philips transducer and a compatible tablet device with the Philips Lumify app already installed. Additionally, the transducer and tablet combination comes pre-registered so the system can be used right out of the box.</Text>
      </View>
    );
  }
}

class Q33 extends React.Component{
  render(){
    return(
      <ScrollView style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>33. I have a Lumify system bundle. Do I need to be connected to the internet for registering my system?</Text>
      <Text style={styles.AnswerStyle}>With a Lumify System bundle, Philips provides the transducer along with a compatible tablet, and pre-registers the tablet and transducer combination , so the system can be used right out of the box. Internet connection is not required to start using a Lumify System Bundle. However, to ensure that you have the latest software updates, Philips recommends that you have connectivity to a wireless or ceullar network on a regular basis to maximize the benefits that Lumify offers.                                                                                                                   . </Text>
      </ScrollView>
    );
  }
}

class Q34 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>34. How do I obtain software updates to my Lumify system bundle ?</Text>
      <Text style={styles.AnswerStyle}>Software updates for Lumify are deployed through the Google Playstore. When the update is available, a notification is displayed to the user when connected to the internet, and may be automatically installed depending on the settings of the compatible tablet.</Text>
      </View>
    );
  }
}

class Q35 extends React.Component{
  render(){
    return(
      <View style={styles.ViewStyleFAQ}>
      <Text style={styles.QuestionHeader}>35. Can I export images to a USB/thumb drive?</Text>
      <Text style={styles.AnswerStyle}>Yes. You can export exams to a DICOM PACS, to a network share, or to a local directory which may on a USB or thumbdrive. See "Configuring Export Destinations" section of User Manual for details.</Text>
      </View>
    );
  }
}






class HomeScreen extends React.Component {
  static navigationOptions={
    headerTitle: 'FAQ'
  };

  render() {
    return (
      <View style={{flex: 1}}>

      <TouchableOpacity style={styles.HomeScreenTouchable}
        onPress={() => this.props.navigation.navigate('GeneralQuestions')}>
          <Image source={require('./FAQ_1.jpg')} style={styles.HomeScreenImage} />
        </TouchableOpacity>

      <TouchableOpacity style={styles.HomeScreenTouchable}
        onPress={() => this.props.navigation.navigate('Details')}>
          <Image source={require('./FAQ_2.jpg')} style={styles.HomeScreenImage} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.HomeScreenTouchable}
        onPress={() => this.props.navigation.navigate('Details')}>
          <Image source={require('./FAQ_3.jpg')} style={styles.HomeScreenImage} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.HomeScreenTouchable}
        onPress={() => this.props.navigation.navigate('Details')}>
          <Image source={require('./FAQ_4.jpg')} style={styles.HomeScreenImage} />
      </TouchableOpacity>

      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  static navigationOptions={
    title: 'Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}


class GeneralQuestions extends React.Component{
  static navigationOptions={
    title:'General Questions',
  };
  render(){
    return(
      <ScrollView style={styles.ViewStyle}>

      <TouchableOpacity
        style={styles.FirstViewStyle}
        onPress={() => this.props.navigation.navigate('Q1')}>
          <Text style={styles.GeneralText}>1. How do I download the Lumify app?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q2')}>
          <Text style={styles.GeneralText}>2. How do I install the Lumify application?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q3')}>
          <Text style={styles.GeneralText}>3. Can I use the Lumify application with non-Lumify transducers?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q4')}>
          <Text style={styles.GeneralText}>4. How will I know when a Lumify application update is available?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q5')}>
          <Text style={styles.GeneralText}>5. Can I transfer my Lumify app to a new device?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q6')}>
          <Text style={styles.GeneralText}>6. Can I use any USB cable to connect my transducer to my device?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q7')}>
          <Text style={styles.GeneralText}>7. What happens if I use a smart device that is not on the compatible devices list?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q8')}>
          <Text style={styles.GeneralText}>8. Which smart devices are compatible with Lumify?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q9')}>
          <Text style={styles.GeneralText}>9. How do I make sure that the data I store on my Lumify-compatible device is secure?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q10')}>
          <Text style={styles.GeneralText}>10. Is the Lumify product HIPAA compliant?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q11')}>
          <Text style={styles.GeneralText}>11. How do I register my new Lumify product?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q12')}>
          <Text style={styles.GeneralText}>12. Can I connect my Lumify transducer to more than one device?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q13')}>
          <Text style={styles.GeneralText}>13. Why can’t I find the Lumify app on the Google Play store?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q14')}>
          <Text style={styles.GeneralText}>14. How do I configure my tablet for network connectivity?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q15')}>
          <Text style={styles.GeneralText}>15. How do I transfer images from my device to an external archive location?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q16')}>
          <Text style={styles.GeneralText}>16. How do I delete all patient information from my device?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q17')}>
          <Text style={styles.GeneralText}>17. Is it okay for me to update the OS on my device?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q18')}>
          <Text style={styles.GeneralText}>18. How large is the Lumify App?                   </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q19')}>
          <Text style={styles.GeneralText}>19. Can I connect Lumify to an external monitor?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q20')}>
          <Text style={styles.GeneralText}>20. Is there a way to bypass Android sleep settings and have the device remain continuously on while the Lumify app is active?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q21')}>
          <Text style={styles.GeneralText}>21. Does Lumify support WPA enterprise Wi-Fi security?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q22')}>
          <Text style={styles.GeneralText}>22. Can I move the focal zone by touching the screen and dragging?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q23')}>
          <Text style={styles.GeneralText}>23. Does Lumify include Autoscan?                        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q24')}>
          <Text style={styles.GeneralText}>24. Can I export PC format images from Lumify?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q25')}>
          <Text style={styles.GeneralText}>25. Can I export DICOM format images from Lumify?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q26')}>
          <Text style={styles.GeneralText}>26. How do I to configure Lumify for network connectivity?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q27')}>
          <Text style={styles.GeneralText}>27. Why can’t I export exams to a DICOM PACS?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q28')}>
          <Text style={styles.GeneralText}>28. How do I capture an image in Mmode ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q29')}>
          <Text style={styles.GeneralText}>29. Why do I need to provide my contact details when I register my transducer?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q30')}>
          <Text style={styles.GeneralText}>30. How can I change the language in the Lumify app?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q31')}>
          <Text style={styles.GeneralText}>31. How do I opt in to receive communication about products and promotions from Philips?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q32')}>
          <Text style={styles.GeneralText}>32. What is a Lumify System bundle? How is it different from the Lumify Ultrasound solution?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q33')}>
          <Text style={styles.GeneralText}>33. I have a Lumify system bundle. Do I need to be connected to the internet for registering my system?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q34')}>
          <Text style={styles.GeneralText}>34. How do I obtain software updates to my Lumify system bundle ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.GeneralStyle}
        onPress={() => this.props.navigation.navigate('Q35')}>
          <Text style={styles.GeneralText}>35. Can I export images to a USB/thumb drive?</Text>
      </TouchableOpacity>


      </ScrollView>
    );
  }
}


class App extends React.Component{
  render()
  {
    return(
      <RootStack/>
    );
  }
}




const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    GeneralQuestions:GeneralQuestions,
    Q1:Q1,
    Q2:Q2,
    Q3:Q3,
    Q4:Q4,
    Q5:Q5,
    Q6:Q6,
    Q7:Q7,
    Q8:Q8,
    Q9:Q9,
    Q10:Q10,
    Q11:Q11,
    Q12:Q12,
    Q13:Q13,
    Q14:Q14,
    Q15:Q15,
    Q16:Q16,
    Q17:Q17,
    Q18:Q18,
    Q19:Q19,
    Q20:Q20,
    Q21:Q21,
    Q22:Q22,
    Q23:Q23,
    Q24:Q24,
    Q25:Q25,
    Q26:Q26,
    Q27:Q27,
    Q28:Q28,
    Q29:Q29,
    Q30:Q30,
    Q31:Q31,
    Q32:Q32,
    Q33:Q33,
    Q34:Q34,
    Q35:Q35,
  },
  {
    initialRouteName: 'Home',
    navigationOptions:{
    headerTitleStyle:{
      fontSize:25, fontWeight:'bold',
    },
    headerTintColor: '#fff',
    headerStyle:{
    backgroundColor:'blue'
  },
}
    }
  );




export default createDrawerNavigator({
  Home: RootStack,
  DetailsScreen: {
    screen: DetailsScreen
  },
}, {
  drawerWidth: 300
});




const styles=StyleSheet.create({
  GeneralStyle:{
    backgroundColor:'#fff',
    borderBottomColor:'black',
    borderBottomWidth:0.5,
    borderColor:'#fff',
    borderWidth:5,
    borderRightWidth:10,
    borderLeftWidth:10,
    width:undefined,
    height:undefined,
    alignSelf:'center',
    flex:1,
  },
  FirstViewStyle:{
    backgroundColor:'#fff',
    borderBottomColor:'black',
    borderBottomWidth:0.5,
    borderLeftWidth:0.1,
    borderRightWidth:0.1,
    borderColor:'#fff',
    borderWidth:5,
    width:undefined,
    height:undefined,
    alignSelf:'center',
    flex:1,
  },
  GeneralText:{
    fontSize:20,
    fontWeight:'normal',
    color:'black',
    flex:1,
    backgroundColor:'#fff',
  },
  HomeScreenTouchable:{
    flex: 1,
    alignSelf: 'center',
    width: undefined,
    height: undefined,
  },
  HomeScreenImage:{
    flex: 1,
    resizeMode: 'contain',
  },
  ViewStyle:{
    flex:1,
    backgroundColor:'#fff',
  },
  ViewStyleFAQ:{
    borderWidth:10,
    borderColor:'#fff',
    flex:1,
    backgroundColor:'#fff',
  },
  QuestionHeader:{
    backgroundColor:'#fff',
    fontSize:30,
    fontWeight:'bold',
    color:'black',
    borderBottomWidth:10,
    borderBottomColor:'#fff',
  },
  AnswerStyle:{
    backgroundColor:'#fff',
    fontSize:20,
    color:'black',
  },
});
