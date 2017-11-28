using Quantum.WebAPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quantum.WebAPI.Data
{
    public interface IClassRepository
    {
        IEnumerable<Classes> GetAllClasses(bool includeClassDetails);
        void AddClasses(Classes newclasses);
        bool AddClassDetail(ClassDetail newClassDetail);
        IEnumerable<ClassDetail> GetAllClassDetail(string classname);
        bool SaveAll();
    }
}
