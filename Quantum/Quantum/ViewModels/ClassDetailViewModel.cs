using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quantum.WebAPI.ViewModels
{
    public class ClassDetailViewModel
    {
        [Required]
        public string ClassName { get; set; }
        [Required]
        public string StudentFirstName { get; set; }
        [Required]
        public string StudentLastName { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public double GPA { get; set; }
    }
}
