import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph } from 'react-native-chart-kit';

export default function Chart() {  

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };
    const screenWidth = Dimensions.get("window").width;


   return (
       <View style={{ flex: 1 , padding : 10 }}>            
            <Text style={{ fontSize : 20 }}>
                Bezier Line Chart
            </Text>
            <LineChart
                data={data}
                width={screenWidth-20} // from react-native
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical : 10,
                    borderRadius: 15
                }}
            />
            <Text style={{ fontSize: 20, marginTop: 16 }}>
                Pie Chart
            </Text>
            <PieChart
                data={[
                    { name: 'Red', population: 45, color: '#f44336', legendFontColor: '#7F7F7F', legendFontSize: 12 },
                    { name: 'Blue', population: 25, color: '#2196f3', legendFontColor: '#7F7F7F', legendFontSize: 12 },
                    { name: 'Yellow', population: 15, color: '#ffeb3b', legendFontColor: '#7F7F7F', legendFontSize: 12 },
                    { name: 'Green', population: 15, color: '#4caf50', legendFontColor: '#7F7F7F', legendFontSize: 12 }
                ]}
                width={screenWidth - 20}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
                style={{ marginVertical: 10, borderRadius: 15 }}
            />
        </View>
   );
}
