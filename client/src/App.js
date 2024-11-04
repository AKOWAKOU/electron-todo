'use client'

import React, { useState } from 'react';
import TasksPage from './components/Tasks/TasksPage';
import UsersPage from './components/Users/UsersPage';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline';

const App = () => {
  const [activeTab, setActiveTab] = useState('tasks');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-4 py-2 text-white ${activeTab === 'tasks' ? 'bg-blue-500' : 'bg-gray-600'} rounded-l`}

            >
              Tâches
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 text-white ${activeTab === 'users' ? 'bg-blue-500' : 'bg-gray-600'} rounded-r`}

            >
              Utilisateurs
            </button>
          </PopoverGroup>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 "
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button
                    onClick={() => setActiveTab('tasks')}
                    className={`px-4 py-2 text-white ${activeTab === 'tasks' ? 'bg-blue-500' : 'bg-gray-600'} rounded-l`}
                  >
                    Tâches
                  </button>
                  <button
                    onClick={() => setActiveTab('users')}
                    className={`px-4 py-2 text-white ${activeTab === 'users' ? 'bg-blue-500' : 'bg-gray-600'} rounded-r`}
                  >
                    Utilisateurs
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="p-4">
        {activeTab === 'tasks' ? <TasksPage /> : <UsersPage />}
      </div>
    </div>
  );
};

export default App;
