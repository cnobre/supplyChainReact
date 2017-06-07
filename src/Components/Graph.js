
import React from 'react';
import * as d3 from 'd3'

var width = 360;
var height = 400;


 var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function(d) { return d.index }))
            .force("collide",d3.forceCollide( function(d){return d.r + 8 }).iterations(16) )
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("y", d3.forceY(0))
            .force("x", d3.forceX(0))


class Graph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  componentWillMount() {
    simulation.on('tick', () => {
      // after force calculation starts, call
      // forceUpdate on the React component on each tick
      this.forceUpdate()
    });
  }

  componentWillReceiveProps(nextProps) {
    // we should actually clone the nodes and links
    // since we're not supposed to directly mutate
    // props passed in from parent, and d3's force function
    // mutates the nodes and links array directly
    // we're bypassing that here for sake of brevity in example
    simulation.nodes(nextProps.nodes)

    simulation.force('link').links(nextProps.links);
  }

  render() {
    // use React to draw all the nodes, d3 calculates the x and y
    var nodes = this.props.nodes.map((node) => {
      var transform = 'translate(' + node.x + ',' + node.y + ')';
      return (

        <g className='node' key={node.key} transform={transform}>
          <circle r={node.r} onMouseOver={(n) => console.log(node)} style={{fill: node.selected ? '#ad0d1b' : '#888888', stroke:'#fff', 'strokeWidth':'2px'}} />
          
        </g>
      );
    });
    var links = this.props.links.map((link) => {
      return (
        <line className='link' key={link.key} strokeWidth={link.size} style={{stroke:'#cccccc', opacity:'1'}}
          x1={link.source.x} x2={link.target.x} y1={link.source.y} y2={link.target.y} />
      );
    });


    return (
      <svg width={width} height={height} style={{display:'block', margin:'auto', 'backgroundColor':'none', opacity:'.9'}}>
      <rect width={width} height={height} style={{'fill':'white', opacity:'.6' , 'pointerEvents':'none'}}/>
        <g>
          {links}
          {nodes}
        </g>
      </svg>

    );
  }
}

class GraphApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      links: [],
    }
  }

  componentDidMount() {

    var maxSize = d3.max(this.props.data,(d)=>{return d[this.props.nodeSizeField]}); 
    var sizeScale = d3.scalePow().exponent(1).range([10 , 30]).domain([0,maxSize]);

    var data = {
  nodes:this.props.data.map((d,i)=>{ return {selected:d.selected, key:'node'+i, label: "l"+i ,r:5}}),
  links:[]
}; 

    this.setState(data);
  }


  render() {



    return (
      <div>
        <Graph nodes={this.state.nodes} links={this.state.links} />

      </div>
    );
  }
}

export default GraphApp