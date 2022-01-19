import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Styles from '../UserScreens/Style';
import HelpBottom from './HelpBottom';
import {useNavigation} from '@react-navigation/native';
const Imprint = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: '5%', paddingBottom: '20%'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../Assets/Images/back.png')}
              style={{width: 23, height: 23, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <Text style={Styles.headingText}>Impressum</Text>
          <View />
        </View>
        <Text style={styles.descriptionText}>
          ImpressumAIONETY UG (haftungsbeschränkt)Geschäftsführer: Thomas
          Swiniarski und Timur DöndürmezAm Wiesenplätzchen 1153639 Königswinter
        </Text>
        <Text style={styles.descriptionText}>
          Telefon: +49 (0) 176 / 68613717E-Mail:
          hello@everygroup.meRegistergericht: Amtsgericht Siegburg
          Registernummer: HRB 15467 Inhaltlich Verantwortlicher gemäß § 55 RStV:
          Timur Döndürmez & Thomas Swiniarski, Am Wiesenplätzchen 11, 53639
          Königswinter
        </Text>
        <Text style={styles.descriptionText}>
          Für außergerichtliche Streitbeilegung steht das System nach der
          Verordnung (EU) Nr. 524/2013 zur Verfügung unter
          https://ec.europa.eu/consumers/odr.Wir sind nach § 36 Absatz Ziffer 1
        </Text>
        <Text style={[styles.descriptionText, {marginTop: 0}]}>
          Verbraucherstreitbeilegungsgesetz (VSBG) weder bereit noch
          verpflichtet, an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </Text>
        <Text style={styles.descriptionText}>
          Nutzungsbedingungen/Disclaimer(1) Diese Website ist Gegenstand der
          nachfolgenden Nutzungsbedingungen, die im Verhältnis zwischen Nutzer
          und Dienstanbieter mit dem Aufruf dieser Website verbindlich
          vereinbart sind. Soweit spezielle Bedingungen für einzelne Nutzungen
          dieser Website von den nachfolgenden Nutzungsbedingungen abweichen,
          wird in der Website an entsprechender Stelle ausdrücklich darauf
          hingewiesen. Es gelten dann im jeweiligen Einzelfall ergänzend die
          besonderen Nutzungsbedingungen.Diese Website beinhaltet Daten und
          Informationen aller Art, die marken- und/oder urheberrechtlich
          zugunsten des Diensteanbieters oder im Einzelfall auch zugunsten
          Dritter geschützt sind. Es ist daher nicht gestattet, die Website im
          Ganzen oder einzelne Teile davon herunterzuladen, zu vervielfältigen
          und/oder zu verbreiten. Gestattet ist vor allem die technisch bedingte
          Vervielfältigung zum Zwecke des Browsing, soweit diese Handlung keinen
          wirtschaftlichen Zwecken dient, sowie die dauerhafte Vervielfältigung
          für den eigenen Gebrauch.(2) Es ist gestattet, einen Link auf diese
          Website zu setzen, soweit er allein der Querreferenz dient. Der
          Diensteanbieter behält sich das Recht vor, die Gestattung zu
          widerrufen. Das Framen dieser Website ist nicht gestattet.(3) Der
          Diensteanbieter übernimmt die Haftung für die Inhalte seiner Website
          gemäß den gesetzlichen Bestimmungen. Eine Gewähr für Richtigkeit und
          Vollständigkeit der auf der Website befindlichen Information wird
          nicht übernommen. Verweise und Links auf Websites Dritter bedeuten
          nicht, dass sich der Diensteanbieter die hinter dem Verweis oder Link
          liegenden Inhalte zu eigen macht. Die Inhalte begründen keine
          Verantwortung des Diensteanbieters für die dort bereit gehaltenen
          Daten und Informationen. Der Diensteanbieter hat keinen Einfluss auf
          die hinter dem Link liegenden Inhalte. Für rechtswidrige, fehlerhafte
          oder unvollständige Inhalte und für Schäden, die aufgrund der Nutzung
          von einem hinter dem Link liegenden Inhalt verursacht worden sind,
          haftet der Diensteanbieter daher nicht.(4) Die Nutzung des Internets
          erfolgt auf eigene Gefahr des Nutzers. Der Diensteanbieter haftet vor
          allem nicht für den technisch bedingten Ausfall des Internets bzw. des
          Zugangs zum Internet.(5) Gerichtsstand ist, wenn der Vertragspartner
          Kaufmann, juristische Person des öffentlichen Rechts oder
          öffentlich-rechtliches Sondervermögen ist, am Sitz des
          Diensteanbieters. Es gilt deutsches Recht unter Ausschluss des
          UN-Kaufrechts.(6) Der Diensteanbieter behält sich das Recht vor, diese
          Nutzungsbedingungen von Zeit zu Zeit zu modifizieren und sie der
          technischen sowie rechtlichen Entwicklung anzupassen. Der Nutzer –
          soweit er sich registriert hat – wird auf die Veränderung gesondert
          hingewiesen. Im Falle der Unwirksamkeit einzelner Regelungen dieser
          Nutzungsvereinbarung bleibt die Wirksamkeit im Übrigen unberührt.
        </Text>
        <HelpBottom />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    fontFamily: FontStyle.MontRegular,
    color: '#707070',
    marginTop: '5%',
  },
  textStyle: {
    fontFamily: FontStyle.MontMedium,
    fontSize: 15,
    color: '#fff',
  },
  textView: {
    // minWidth: 30,
    height: 30,
    marginHorizontal: 5,
    // backgroundColor: 'orange',
    alignItems: 'center',
  },
});

export default Imprint;
