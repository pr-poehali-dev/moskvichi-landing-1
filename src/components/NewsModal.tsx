import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: string;
  title: string;
  preview: string;
  image?: string;
  channel: string;
  channelUrl: string;
  postUrl: string;
  date: string;
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Открытие нового парка в Нагатинском Затоне',
    preview: 'Сегодня состоялось торжественное открытие благоустроенной зоны отдыха на набережной. Жители района получили новое место для прогулок и занятий спортом.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    channel: 'Нагатинский Затон',
    channelUrl: 'https://t.me/Nagatinskii_Zaton',
    postUrl: 'https://t.me/Nagatinskii_Zaton/1234',
    date: '2 часа назад'
  },
  {
    id: '2',
    title: 'Ремонт дороги на улице Маршала Захарова',
    preview: 'Начались работы по капитальному ремонту проезжей части. Движение временно ограничено, просим жителей учесть изменения в маршрутах.',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
    channel: 'Марьино ЮВАО',
    channelUrl: 'https://t.me/teleg_Marino_UVAO',
    postUrl: 'https://t.me/teleg_Marino_UVAO/5678',
    date: '4 часа назад'
  },
  {
    id: '3',
    title: 'Новая детская площадка в Южном Бутово',
    preview: 'В микрорайоне установлены современные игровые комплексы и спортивные тренажеры. Площадка оборудована безопасным покрытием.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    channel: 'Южное Бутово',
    channelUrl: 'https://t.me/Uzhnoe_Butovo',
    postUrl: 'https://t.me/Uzhnoe_Butovo/9012',
    date: '6 часов назад'
  },
  {
    id: '4',
    title: 'Культурное мероприятие в Теплом стане',
    preview: 'В эти выходные в районе пройдет фестиваль народного творчества. Выступления коллективов, мастер-классы и развлечения для детей.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
    channel: 'Таганский',
    channelUrl: 'https://t.me/teleg_Taganski',
    postUrl: 'https://t.me/teleg_Taganski/3456',
    date: '8 часов назад'
  }
];

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ isOpen, onClose }) => {
  const [currentNews, setCurrentNews] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % mockNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const currentItem = mockNews[currentNews];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl">
        <DialogHeader className="pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-sf-pro font-semibold text-moscow-gray">
              🔥 Горячие новости
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Icon name="X" size={16} />
              </Button>
            </DialogClose>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Icon name="Clock" size={14} />
            <span>{currentItem.date}</span>
            <span>•</span>
            <span className="text-telegram font-medium">{currentItem.channel}</span>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {currentItem.image && (
            <div className="w-full h-48 rounded-xl overflow-hidden">
              <img 
                src={currentItem.image} 
                alt={currentItem.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-3">
            <h3 className="font-sf-pro font-semibold text-moscow-gray text-lg leading-tight">
              {currentItem.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {currentItem.preview}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(currentItem.channelUrl, '_blank')}
              className="text-telegram border-telegram hover:bg-telegram hover:text-white"
            >
              <Icon name="Send" className="mr-1" size={14} />
              Канал
            </Button>
            
            <Button
              size="sm"
              onClick={() => window.open(currentItem.postUrl, '_blank')}
              className="bg-telegram hover:bg-telegram-dark text-white"
            >
              <Icon name="ExternalLink" className="mr-1" size={14} />
              Читать полностью
            </Button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 pt-2">
            {mockNews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNews(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentNews ? 'bg-telegram' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsModal;