using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Quantum.WebAPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quantum.WebAPI.Data
{
    public class ClassRepository : IClassRepository
    {
        private readonly ClassContext _ctx;
        private readonly ILogger<ClassRepository> _logger;

        public ClassRepository(ClassContext ctx, ILogger<ClassRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public IEnumerable<Classes> GetAllClasses(bool includeClassDetails)
        {
            try
            {

                _logger.LogInformation("GetAllClasses was called");
                return _ctx.Classes.ToList();

            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all CarOwners: {ex}");
                return null;
            }
        }

        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }

        public void AddClasses(Classes newclasses)
        {
            try
            {
                _logger.LogInformation("AddClasses was called");
                AddEntity(newclasses);
                //return true;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to AddClasses: {ex}");
                //return false;
            }
        }

        public bool AddClassDetail(ClassDetail newClassDetail)
        {
            bool result = false;
            try
            {
                _logger.LogInformation("AddClassDetail was called");
                var islastNameFound = _ctx.ClassDetails.Any(x => x.StudentLastName == newClassDetail.StudentLastName);
                if (!islastNameFound)
                {
                    _logger.LogInformation("AddClassDetail was called");
                    AddEntity(newClassDetail);
                    result = true;
                }
                else
                {
                    _logger.LogInformation("AddClassDetail was called, Classdetail's can't be added for existing lastname");

                }

            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to AddClassDetail: {ex}");
                //return null;
            }
            return result;
        }


        public IEnumerable<ClassDetail> GetAllClassDetail(string classname)
        {
            try
            {
                if (!string.IsNullOrEmpty(classname) && classname!="null")
                {
                    _logger.LogInformation("GetAllClasses was called");
                    //return _ctx.Classes.SelectMany(o => o.ClassDetails.Where(x => x.ClassName == classname)).ToList();
                    return _ctx.ClassDetails.Where(x => x.ClassName == classname).ToList();
                }
                else
                {
                    _logger.LogInformation("GetAllClasses was called");
                    
                    return _ctx.ClassDetails.ToList();
                }
               

            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all CarOwners: {ex}");
                return null;
            }
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}
