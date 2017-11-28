using Quantum.WebAPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quantum.WebAPI.ViewModels
{
    public class ClassesViewModel
    {
        [Required]
        public string ClassName { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public string TeacherName { get; set; }
    }
}
