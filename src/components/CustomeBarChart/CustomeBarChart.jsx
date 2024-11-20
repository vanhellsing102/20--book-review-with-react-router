import PropTypes from "prop-types";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomeBarChart = ({barChartBooks}) => {
    return (
        <div className="max-w-5xl mx-auto mt-7">
            <BarChart width={1000} height={450} data={barChartBooks} margin={{ top: 20, right: 30, left: 20, bottom: 5,}}>
                <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis/>
                    <Tooltip></Tooltip>
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {barChartBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                    </Bar>
            </BarChart>
        </div>
    );
};

CustomeBarChart.propTypes = {
    barChartBooks: PropTypes.array.isRequired
}

export default CustomeBarChart;