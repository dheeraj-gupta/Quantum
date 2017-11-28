using AutoMapper;
using Quantum.WebAPI.Data.Entities;
using Quantum.WebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quantum.WebAPI.Data
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Classes, ClassesViewModel>()
              .ReverseMap();

            CreateMap<ClassDetail, ClassDetailViewModel>()
              .ReverseMap();
        }

    }
}
