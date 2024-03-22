import { LineChart as Lchart, Line } from 'recharts';

const LineChart = () => {
  const mathMarksData =  [
    { "id": 1, "student": "Alice", "math_mark": 85, "physics_mark": 78, "chemistry_mark": 92 },
    { "id": 2, "student": "Bob", "math_mark": 76, "physics_mark": 85, "chemistry_mark": 80 },
    { "id": 3, "student": "Charlie", "math_mark": 90, "physics_mark": 92, "chemistry_mark": 88 },
    { "id": 4, "student": "David", "math_mark": 88, "physics_mark": 80, "chemistry_mark": 85 },
    { "id": 5, "student": "Eve", "math_mark": 72, "physics_mark": 78, "chemistry_mark": 75 },
    { "id": 6, "student": "Frank", "math_mark": 82, "physics_mark": 90, "chemistry_mark": 82 },
    { "id": 7, "student": "Grace", "math_mark": 95, "physics_mark": 88, "chemistry_mark": 94 },
    { "id": 8, "student": "Henry", "math_mark": 78, "physics_mark": 82, "chemistry_mark": 80 },
    { "id": 9, "student": "Ivy", "math_mark": 87, "physics_mark": 85, "chemistry_mark": 90 },
    { "id": 10, "student": "Jack", "math_mark": 81, "physics_mark": 76, "chemistry_mark": 85 }
  ]
  
      
    return (
        <div>
            <Lchart width={500} height={400} data={mathMarksData}>
                <Line dataKey="math_mark" stroke='red'></Line>
                <Line dataKey="chemistry_mark" stroke='green'></Line>
            </Lchart>
        </div>
    );
};

export default LineChart;