import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topSection: {
        flexGrow: 3,
        backgroundColor: '#5BC2C1',
        alignItems: 'center'
    },
    middleSection: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomSection: {
        flexGrow: 3,
        backgroundColor: '#FD909E',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    topSectionText: {
        fontWeight: 'bold',
        marginTop: 50
    },
    middleSectionText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    bottomSectionText: {
        fontWeight: 'bold',
        marginBottom: 30
    } 
})