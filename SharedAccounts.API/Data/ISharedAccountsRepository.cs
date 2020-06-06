using System.Collections.Generic;
using System.Threading.Tasks;
using SharedAccounts.API.Models;

namespace SharedAccounts.API.Data
{
    public interface ISharedAccountsRepository
    {
         void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
          
    }
}