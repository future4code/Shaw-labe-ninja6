import React from "react";
import axios from "axios";
import { header, url } from "../../constants/authorization";
const jobs = [
  {
    id: 1,
    nome: "Job 1",
    price: 123,
  },
  {
    id: 2,
    nome: "Job 2",
    price: 123,
  },
  {
    id: 3,
    nome: "Job 3",
    price: 123,
  },
];

export default class Filtro extends React.Component {
  state = {
    min: "",
    max: "",
    nome: "",
    jobs: [],
  };

  getAllJobs = () => {
    axios.get(header, url).then((res) => {
      this.setState({ jobs: res.data.jobs });
      const filtros = this.state.jobs
        .filter((job) => {
          this.state.max ? job.price <= this.state.max : true;
        })
        .filter((job) => {
          this.state.min ? job.price >= this.state.min : true;
        })
        .filter((job) =>
          this.state.nome
            ? job.title
                .toLowerCase()
                .includes(`${this.state.nome.toLowerCase()}`)
            : true
        );
      this.setState({ jobs: filtros });
    }).catch(err =>{
        alert("Erro. Tente novamente!", err)
    })
  };


  
//   getAllJobs = () => {
//        axios
//        .get(header, url)
//        .then((res) => {
//     this.setState({ jobs: res.data.jobs });
//     const filtroNome = jobs.filter((job)=> {
//         return job.nome.includes(this.state.nome)
//     })

//     const filtroMax = filtroNome.filter((job)=>{
//         if(this.state.max){
//             return job.price <= this.state.max
//         }else{
//             return job
//         }
//     })

//     const jobsFiltrados = filtroMax.filter((job)=> {
//         if(this.state.min){
//             return job.price >= this.state.min
//         }else{
//             return job
//         }
//     })
//     return jobsFiltrados
    
//     })}  

  onChangeMin = (eve) => {
    this.setState({ min: eve.target.value });
  };

  onChangeMax = (eve) => {
    this.setState({ max: eve.target.value });
  };

  onChangeNome = (eve) => {
    this.setState({ nome: eve.target.value });
  };

  render() {
    retrun(
      <div>
        <div>
          <input
            placeholder={"Valor mínimo"}
            type="number"
            value={this.state.min}
            onChange={this.onChangeMin}
          />
        </div>
        <div>
          <input
            placeholder={"Valor máximo"}
            type="number"
            value={this.state.max}
            onChange={this.onChangeMax}
          />
        </div>
        <div>
          <input
            placeholder={"Buscar por nome"}
            value={this.state.nome}
            onChange={this.state.onChangeNome}
          />
        </div>
      </div>
    );
  }
}
